package transactions;

import io.gatling.core.body.StringBody;
import io.gatling.core.session.package$;
import io.gatling.javaapi.core.ChainBuilder;
import io.gatling.javaapi.core.FeederBuilder;
import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpProtocolBuilder;
import scala.collection.immutable.Map;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.http;
import static io.gatling.javaapi.http.HttpDsl.status;

public class MarketplaceFeesPostSimulation extends Simulation {

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

    FeederBuilder.FileBased<Object> feeder = jsonFile("post_marketplace_fees.json").circular();

    ChainBuilder postMarketplaceFees =
        exec(
            http("Post marketplace fees")
                .post("/api/transactions/v1/fees/marketplace")
                .header("Authorization", package$ -> {
                    return "Bearer " + accessToken;
                })
                .header("Content-Type", "application/json")
                .body(StringBody("[{\"scope\":\"#{scope}\",\"marketplaceAccountID\":#{marketplaceAccountID},\"internalDealID\":#{internalDealID},\"publisherAccountID\":#{publisherAccountID.jsonStringify()},\"value\":#{value},\"calculationType\":\"#{calculationType}\",\"description\":\"#{description}\"}]"))
                .asJson()
                .check(status().is(201))
        );

    // Now, we can write the scenario as a composition
    ScenarioBuilder users = scenario("Login").exec(login);
    ScenarioBuilder scn = scenario("Post Marketplace Fees").feed(feeder).exec(postMarketplaceFees);

    {
        setUp(
            users.injectOpen(atOnceUsers(1))
                .andThen(
                    // generate an open workload injection profile
                    // with levels of 10, 15, 20, 25 and 30 arriving users per second
                    // each level lasting 10 seconds
                    // separated by linear ramps lasting 10 seconds
                    scn.injectOpen(
                        incrementUsersPerSec(1)
                            .times(5)
                            .eachLevelLasting(10)
                            .separatedByRampsLasting(10)
                            .startingFrom(6)
                    )

                    // stress peak at 80 users in 1 second
                    // started failing one of the requests
                    // scn.injectOpen(stressPeakUsers(50).during(1))

                    // scn.injectOpen(constantUsersPerSec(44).during(60))

                    // scn.injectOpen(rampUsers(110).during(10))
                    // scn.injectOpen(rampUsers(100).during(2))

                    // scn.injectOpen(rampUsersPerSec(1).to(16).during(16))

                    // constant 20 users per second for 60 seconds
                    // scn.injectOpen(constantUsersPerSec(20).during(60))
                    //         .throttle(reachRps(100).in(20))

                    // constant 60 users per second for 60 seconds
                    // started failing several requests
                    // scn.injectClosed(constantConcurrentUsers(60).during(60))

                    // ramp up to 80 users in 10 seconds
                    // scn.injectClosed(rampConcurrentUsers(10).to(80).during(10))
                )
        ).protocols(httpProtocol);
    }
}