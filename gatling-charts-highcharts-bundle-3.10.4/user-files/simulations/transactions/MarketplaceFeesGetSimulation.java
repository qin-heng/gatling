package transactions;

import io.gatling.javaapi.core.ChainBuilder;
import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpProtocolBuilder;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

public class MarketplaceFeesGetSimulation extends Simulation {

    String accessToken = "";

    HttpProtocolBuilder httpProtocol =
        http.baseUrl("https://app.test.indexexchange.com");

    // Let's split this big scenario into composable business processes, like one would do with the
    // PageObject pattern with Selenium
    ChainBuilder login =
        exec(
            http("Login")
                .post("/api/authentication/v1/login")
                .body(RawFileBody("login_body.json"))
                .check(status().is(200))
                .check(jsonPath("$.loginResponse.authResponse.access_token").saveAs("accessToken"))
        ).exec(session -> {
            accessToken = session.getString("accessToken");
            return session;
        }).pause(5);

    ChainBuilder getMarketplaceFees =
        exec(
            http("Get all marketplace fees")
                .get("/api/transactions/v1/fees/marketplace")
                .header("Authorization", session -> {
                    return "Bearer " + accessToken;
                })
                .check(status().is(200))
        );

    // Now, we can write the scenario as a composition
    ScenarioBuilder users = scenario("Login").exec(login);
    ScenarioBuilder scn = scenario("Get Marketplace Fees").exec(getMarketplaceFees);

    {
        setUp(
            users.injectOpen(atOnceUsers(1))
                .andThen(
                    // generate an open workload injection profile
                    // with levels of 10, 15, 20, 25 and 30 arriving users per second
                    // each level lasting 10 seconds
                    // separated by linear ramps lasting 10 seconds
                    // 1. for 2 pods, started seeing lots of failing requests when active users reach ~100
                    // and max requests reached 7
                    // 2. for 3 pods, started seeing lots of failing requests when active users reach ~170
                    // and max requests reached 10
                    scn.injectOpen(
                        incrementUsersPerSec(1)
                            .times(5)
                            .eachLevelLasting(10)
                            .separatedByRampsLasting(10)
                            .startingFrom(6)
                    )

                    // peak 100 users in one second for 2 pods
                    // peak 200 users in one second for 3 pods
                    // started seeing several failure requests
                    // scn.injectOpen(stressPeakUsers(170).during(1))

                    // constant 5 users per second for 60 seconds
                    // started seeing lots of failure requests when constant users are set to 6
                    // and max active users reached ~100
                    // scn.injectOpen(constantUsersPerSec(5).during(60))

                    // ramp up to 100 users in 1 second
                    // started seeing one/two failure request
                    // scn.injectOpen(rampUsers(200).during(1))
                    // scn.injectOpen(rampUsers(100).during(2))

                    // started seeing one failure request when active users reach 42 and max requests reached 10
                    // max active users may vary based on the load on the server
                    // scn.injectOpen(rampUsersPerSec(1).to(10).during(10))

                    // constant 20 users per second for 60 seconds
                    // scn.injectOpen(constantUsersPerSec(20).during(60))
                    //         .throttle(reachRps(100).in(20))
                )
        ).protocols(httpProtocol);
        // .assertions(
        //     global().failedRequests().percent().lt(5.0) // no failed requests
        // );
    }
}