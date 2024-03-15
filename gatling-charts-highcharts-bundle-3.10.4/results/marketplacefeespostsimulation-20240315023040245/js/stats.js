var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "361",
        "ok": "259",
        "ko": "102"
    },
    "minResponseTime": {
        "total": "571",
        "ok": "571",
        "ko": "3775"
    },
    "maxResponseTime": {
        "total": "32787",
        "ok": "29469",
        "ko": "32787"
    },
    "meanResponseTime": {
        "total": "10114",
        "ok": "6806",
        "ko": "18512"
    },
    "standardDeviation": {
        "total": "9221",
        "ok": "7173",
        "ko": "8483"
    },
    "percentiles1": {
        "total": "6532",
        "ok": "2953",
        "ko": "17747"
    },
    "percentiles2": {
        "total": "16581",
        "ok": "11442",
        "ko": "26924"
    },
    "percentiles3": {
        "total": "30039",
        "ok": "21353",
        "ko": "30045"
    },
    "percentiles4": {
        "total": "30378",
        "ok": "27387",
        "ko": "30944"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 5,
    "percentage": 1
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 30,
    "percentage": 8
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 224,
    "percentage": 62
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 102,
    "percentage": 28
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.167",
        "ok": "2.272",
        "ko": "0.895"
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
        "total": "571",
        "ok": "571",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "571",
        "ok": "571",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "571",
        "ok": "571",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "571",
        "ok": "571",
        "ko": "-"
    },
    "percentiles2": {
        "total": "571",
        "ok": "571",
        "ko": "-"
    },
    "percentiles3": {
        "total": "571",
        "ok": "571",
        "ko": "-"
    },
    "percentiles4": {
        "total": "571",
        "ok": "571",
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
        "total": "0.009",
        "ok": "0.009",
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
        "total": "360",
        "ok": "258",
        "ko": "102"
    },
    "minResponseTime": {
        "total": "733",
        "ok": "733",
        "ko": "3775"
    },
    "maxResponseTime": {
        "total": "32787",
        "ok": "29469",
        "ko": "32787"
    },
    "meanResponseTime": {
        "total": "10140",
        "ok": "6830",
        "ko": "18512"
    },
    "standardDeviation": {
        "total": "9220",
        "ok": "7177",
        "ko": "8483"
    },
    "percentiles1": {
        "total": "6612",
        "ok": "2972",
        "ko": "17747"
    },
    "percentiles2": {
        "total": "16594",
        "ok": "11443",
        "ko": "26924"
    },
    "percentiles3": {
        "total": "30039",
        "ok": "21363",
        "ko": "30045"
    },
    "percentiles4": {
        "total": "30382",
        "ok": "27407",
        "ko": "30944"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 4,
    "percentage": 1
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 30,
    "percentage": 8
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 224,
    "percentage": 62
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 102,
    "percentage": 28
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.158",
        "ok": "2.263",
        "ko": "0.895"
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
