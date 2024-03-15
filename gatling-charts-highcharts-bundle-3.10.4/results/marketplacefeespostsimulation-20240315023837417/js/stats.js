var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "56",
        "ok": "56",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "625",
        "ok": "625",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3961",
        "ok": "3961",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2024",
        "ok": "2024",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "762",
        "ok": "762",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2061",
        "ok": "2061",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2586",
        "ok": "2586",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3265",
        "ok": "3265",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3627",
        "ok": "3627",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1,
    "percentage": 2
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 7,
    "percentage": 13
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 48,
    "percentage": 86
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.947",
        "ok": "2.947",
        "ko": "-"
    }
},
contents: {
"req_login-73596745": {
        type: "REQUEST",
        name: "Login",
path: "Login",
pathFormatted: "req_login-73596745",
stats: {
    "name": "Login",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "625",
        "ok": "625",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "625",
        "ok": "625",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "625",
        "ok": "625",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "625",
        "ok": "625",
        "ko": "-"
    },
    "percentiles2": {
        "total": "625",
        "ok": "625",
        "ko": "-"
    },
    "percentiles3": {
        "total": "625",
        "ok": "625",
        "ko": "-"
    },
    "percentiles4": {
        "total": "625",
        "ok": "625",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1,
    "percentage": 100
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.053",
        "ok": "0.053",
        "ko": "-"
    }
}
    },"req_post-marketplac--1275212350": {
        type: "REQUEST",
        name: "Post marketplace fees",
path: "Post marketplace fees",
pathFormatted: "req_post-marketplac--1275212350",
stats: {
    "name": "Post marketplace fees",
    "numberOfRequests": {
        "total": "55",
        "ok": "55",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "928",
        "ok": "928",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3961",
        "ok": "3961",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2050",
        "ok": "2050",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "745",
        "ok": "745",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2117",
        "ok": "2117",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2596",
        "ok": "2596",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3269",
        "ok": "3269",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3633",
        "ok": "3633",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 7,
    "percentage": 13
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 48,
    "percentage": 87
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.895",
        "ok": "2.895",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
