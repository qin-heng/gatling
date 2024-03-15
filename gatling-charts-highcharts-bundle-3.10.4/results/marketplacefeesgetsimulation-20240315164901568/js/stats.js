var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "221",
        "ok": "84",
        "ko": "137"
    },
    "minResponseTime": {
        "total": "691",
        "ok": "691",
        "ko": "34634"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "57392",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "40989",
        "ok": "21750",
        "ko": "52786"
    },
    "standardDeviation": {
        "total": "18345",
        "ok": "12334",
        "ko": "9136"
    },
    "percentiles1": {
        "total": "43192",
        "ok": "21882",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "26914",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "53979",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "56753",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1,
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
    "count": 83,
    "percentage": 38
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 137,
    "percentage": 62
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.908",
        "ok": "1.105",
        "ko": "1.803"
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
        "total": "691",
        "ok": "691",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "691",
        "ok": "691",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "691",
        "ok": "691",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "691",
        "ok": "691",
        "ko": "-"
    },
    "percentiles2": {
        "total": "691",
        "ok": "691",
        "ko": "-"
    },
    "percentiles3": {
        "total": "691",
        "ok": "691",
        "ko": "-"
    },
    "percentiles4": {
        "total": "691",
        "ok": "691",
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
        "total": "0.013",
        "ok": "0.013",
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
        "total": "220",
        "ok": "83",
        "ko": "137"
    },
    "minResponseTime": {
        "total": "3159",
        "ok": "3159",
        "ko": "34634"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "57392",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "41172",
        "ok": "22003",
        "ko": "52786"
    },
    "standardDeviation": {
        "total": "18183",
        "ok": "12188",
        "ko": "9136"
    },
    "percentiles1": {
        "total": "43443",
        "ok": "21915",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "26944",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "54047",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "56761",
        "ko": "60001"
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
    "count": 83,
    "percentage": 38
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 137,
    "percentage": 62
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.895",
        "ok": "1.092",
        "ko": "1.803"
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
