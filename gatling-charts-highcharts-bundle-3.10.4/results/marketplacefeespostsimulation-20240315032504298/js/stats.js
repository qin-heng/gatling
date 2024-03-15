var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "541",
        "ok": "540",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "682",
        "ok": "682",
        "ko": "1551"
    },
    "maxResponseTime": {
        "total": "7938",
        "ok": "7938",
        "ko": "1551"
    },
    "meanResponseTime": {
        "total": "2456",
        "ok": "2458",
        "ko": "1551"
    },
    "standardDeviation": {
        "total": "1209",
        "ok": "1210",
        "ko": "0"
    },
    "percentiles1": {
        "total": "2218",
        "ok": "2220",
        "ko": "1551"
    },
    "percentiles2": {
        "total": "3148",
        "ok": "3151",
        "ko": "1551"
    },
    "percentiles3": {
        "total": "4668",
        "ok": "4671",
        "ko": "1551"
    },
    "percentiles4": {
        "total": "6160",
        "ok": "6161",
        "ko": "1551"
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
    "count": 57,
    "percentage": 11
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 478,
    "percentage": 88
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.356",
        "ok": "5.347",
        "ko": "0.01"
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
        "total": "682",
        "ok": "682",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "682",
        "ok": "682",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "682",
        "ok": "682",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "682",
        "ok": "682",
        "ko": "-"
    },
    "percentiles2": {
        "total": "682",
        "ok": "682",
        "ko": "-"
    },
    "percentiles3": {
        "total": "682",
        "ok": "682",
        "ko": "-"
    },
    "percentiles4": {
        "total": "682",
        "ok": "682",
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
        "total": "0.01",
        "ok": "0.01",
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
        "total": "540",
        "ok": "539",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "733",
        "ok": "733",
        "ko": "1551"
    },
    "maxResponseTime": {
        "total": "7938",
        "ok": "7938",
        "ko": "1551"
    },
    "meanResponseTime": {
        "total": "2459",
        "ok": "2461",
        "ko": "1551"
    },
    "standardDeviation": {
        "total": "1208",
        "ok": "1209",
        "ko": "0"
    },
    "percentiles1": {
        "total": "2220",
        "ok": "2221",
        "ko": "1551"
    },
    "percentiles2": {
        "total": "3151",
        "ok": "3154",
        "ko": "1551"
    },
    "percentiles3": {
        "total": "4671",
        "ok": "4673",
        "ko": "1551"
    },
    "percentiles4": {
        "total": "6161",
        "ok": "6161",
        "ko": "1551"
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
    "count": 57,
    "percentage": 11
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 478,
    "percentage": 89
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.347",
        "ok": "5.337",
        "ko": "0.01"
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
