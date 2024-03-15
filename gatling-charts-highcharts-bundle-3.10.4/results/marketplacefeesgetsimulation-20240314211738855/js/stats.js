var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "171",
        "ok": "171",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1701",
        "ok": "1701",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "41367",
        "ok": "41367",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "25781",
        "ok": "25781",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "10582",
        "ok": "10582",
        "ko": "-"
    },
    "percentiles1": {
        "total": "26886",
        "ok": "26886",
        "ko": "-"
    },
    "percentiles2": {
        "total": "36165",
        "ok": "36165",
        "ko": "-"
    },
    "percentiles3": {
        "total": "40780",
        "ok": "40780",
        "ko": "-"
    },
    "percentiles4": {
        "total": "41207",
        "ok": "41207",
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
    "count": 171,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.49",
        "ok": "3.49",
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
        "total": "1701",
        "ok": "1701",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1701",
        "ok": "1701",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1701",
        "ok": "1701",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1701",
        "ok": "1701",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1701",
        "ok": "1701",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1701",
        "ok": "1701",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1701",
        "ok": "1701",
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
    "count": 1,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.02",
        "ok": "0.02",
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
        "total": "170",
        "ok": "170",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "4111",
        "ok": "4111",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "41367",
        "ok": "41367",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "25923",
        "ok": "25923",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "10450",
        "ok": "10450",
        "ko": "-"
    },
    "percentiles1": {
        "total": "26959",
        "ok": "26959",
        "ko": "-"
    },
    "percentiles2": {
        "total": "36187",
        "ok": "36187",
        "ko": "-"
    },
    "percentiles3": {
        "total": "40782",
        "ok": "40782",
        "ko": "-"
    },
    "percentiles4": {
        "total": "41207",
        "ok": "41207",
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
    "count": 170,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.469",
        "ok": "3.469",
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
