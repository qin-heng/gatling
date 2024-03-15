var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "631",
        "ok": "631",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "615",
        "ok": "615",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "23070",
        "ok": "23070",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "6249",
        "ok": "6249",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "5982",
        "ok": "5982",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3384",
        "ok": "3384",
        "ko": "-"
    },
    "percentiles2": {
        "total": "10491",
        "ok": "10491",
        "ko": "-"
    },
    "percentiles3": {
        "total": "17882",
        "ok": "17882",
        "ko": "-"
    },
    "percentiles4": {
        "total": "20872",
        "ok": "20872",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 10,
    "percentage": 2
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 82,
    "percentage": 13
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 539,
    "percentage": 85
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.685",
        "ok": "5.685",
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
        "total": "757",
        "ok": "757",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "757",
        "ok": "757",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "757",
        "ok": "757",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "757",
        "ok": "757",
        "ko": "-"
    },
    "percentiles2": {
        "total": "757",
        "ok": "757",
        "ko": "-"
    },
    "percentiles3": {
        "total": "757",
        "ok": "757",
        "ko": "-"
    },
    "percentiles4": {
        "total": "757",
        "ok": "757",
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
    },"req_get-all-marketp-114750891": {
        type: "REQUEST",
        name: "Get all marketplace fees",
path: "Get all marketplace fees",
pathFormatted: "req_get-all-marketp-114750891",
stats: {
    "name": "Get all marketplace fees",
    "numberOfRequests": {
        "total": "630",
        "ok": "630",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "615",
        "ok": "615",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "23070",
        "ok": "23070",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "6258",
        "ok": "6258",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "5983",
        "ok": "5983",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3428",
        "ok": "3428",
        "ko": "-"
    },
    "percentiles2": {
        "total": "10492",
        "ok": "10492",
        "ko": "-"
    },
    "percentiles3": {
        "total": "17886",
        "ok": "17886",
        "ko": "-"
    },
    "percentiles4": {
        "total": "20872",
        "ok": "20872",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 9,
    "percentage": 1
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 82,
    "percentage": 13
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 539,
    "percentage": 86
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.676",
        "ok": "5.676",
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
