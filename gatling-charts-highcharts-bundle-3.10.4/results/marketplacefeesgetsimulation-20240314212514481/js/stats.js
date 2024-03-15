var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "721",
        "ok": "604",
        "ko": "117"
    },
    "minResponseTime": {
        "total": "165",
        "ok": "668",
        "ko": "165"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "59978",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "15085",
        "ok": "13558",
        "ko": "22965"
    },
    "standardDeviation": {
        "total": "13224",
        "ok": "12777",
        "ko": "12677"
    },
    "percentiles1": {
        "total": "10995",
        "ok": "9111",
        "ko": "21044"
    },
    "percentiles2": {
        "total": "22330",
        "ok": "20751",
        "ko": "30088"
    },
    "percentiles3": {
        "total": "41099",
        "ok": "40240",
        "ko": "44262"
    },
    "percentiles4": {
        "total": "57055",
        "ok": "55261",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 3,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 9,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 592,
    "percentage": 82
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 117,
    "percentage": 16
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.504",
        "ok": "4.611",
        "ko": "0.893"
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
        "total": "785",
        "ok": "785",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "785",
        "ok": "785",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "785",
        "ok": "785",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "785",
        "ok": "785",
        "ko": "-"
    },
    "percentiles2": {
        "total": "785",
        "ok": "785",
        "ko": "-"
    },
    "percentiles3": {
        "total": "785",
        "ok": "785",
        "ko": "-"
    },
    "percentiles4": {
        "total": "785",
        "ok": "785",
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
        "total": "0.008",
        "ok": "0.008",
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
        "total": "720",
        "ok": "603",
        "ko": "117"
    },
    "minResponseTime": {
        "total": "165",
        "ok": "668",
        "ko": "165"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "59978",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "15104",
        "ok": "13579",
        "ko": "22965"
    },
    "standardDeviation": {
        "total": "13222",
        "ok": "12777",
        "ko": "12677"
    },
    "percentiles1": {
        "total": "11002",
        "ok": "9124",
        "ko": "21044"
    },
    "percentiles2": {
        "total": "22351",
        "ok": "20757",
        "ko": "30088"
    },
    "percentiles3": {
        "total": "41103",
        "ok": "40255",
        "ko": "44262"
    },
    "percentiles4": {
        "total": "57058",
        "ok": "55272",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 2,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 9,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 592,
    "percentage": 82
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 117,
    "percentage": 16
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.496",
        "ok": "4.603",
        "ko": "0.893"
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
