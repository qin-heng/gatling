var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "81",
        "ok": "81",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "622",
        "ok": "622",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "19100",
        "ok": "19100",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "12919",
        "ok": "12919",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "4757",
        "ok": "4757",
        "ko": "-"
    },
    "percentiles1": {
        "total": "13961",
        "ok": "13961",
        "ko": "-"
    },
    "percentiles2": {
        "total": "17262",
        "ok": "17262",
        "ko": "-"
    },
    "percentiles3": {
        "total": "18296",
        "ok": "18296",
        "ko": "-"
    },
    "percentiles4": {
        "total": "18804",
        "ok": "18804",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1,
    "percentage": 1
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
    "count": 80,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.115",
        "ok": "3.115",
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
        "total": "622",
        "ok": "622",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "622",
        "ok": "622",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "622",
        "ok": "622",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "622",
        "ok": "622",
        "ko": "-"
    },
    "percentiles2": {
        "total": "622",
        "ok": "622",
        "ko": "-"
    },
    "percentiles3": {
        "total": "622",
        "ok": "622",
        "ko": "-"
    },
    "percentiles4": {
        "total": "622",
        "ok": "622",
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
        "total": "0.038",
        "ok": "0.038",
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
        "total": "80",
        "ok": "80",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1803",
        "ok": "1803",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "19100",
        "ok": "19100",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "13072",
        "ok": "13072",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "4583",
        "ok": "4583",
        "ko": "-"
    },
    "percentiles1": {
        "total": "13966",
        "ok": "13966",
        "ko": "-"
    },
    "percentiles2": {
        "total": "17281",
        "ok": "17281",
        "ko": "-"
    },
    "percentiles3": {
        "total": "18303",
        "ok": "18303",
        "ko": "-"
    },
    "percentiles4": {
        "total": "18808",
        "ok": "18808",
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
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 80,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.077",
        "ok": "3.077",
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
