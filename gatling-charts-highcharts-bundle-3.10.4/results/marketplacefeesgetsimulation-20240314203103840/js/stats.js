var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "181",
        "ok": "139",
        "ko": "42"
    },
    "minResponseTime": {
        "total": "2488",
        "ok": "2488",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "63483",
        "ok": "61300",
        "ko": "63483"
    },
    "meanResponseTime": {
        "total": "45667",
        "ok": "41102",
        "ko": "60775"
    },
    "standardDeviation": {
        "total": "17069",
        "ok": "17007",
        "ko": "1091"
    },
    "percentiles1": {
        "total": "53728",
        "ok": "46561",
        "ko": "60002"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "57606",
        "ko": "61146"
    },
    "percentiles3": {
        "total": "61482",
        "ok": "59955",
        "ko": "63277"
    },
    "percentiles4": {
        "total": "63333",
        "ok": "61043",
        "ko": "63472"
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
    "count": 139,
    "percentage": 77
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 42,
    "percentage": 23
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.479",
        "ok": "1.904",
        "ko": "0.575"
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
        "total": "2488",
        "ok": "2488",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2488",
        "ok": "2488",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2488",
        "ok": "2488",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2488",
        "ok": "2488",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2488",
        "ok": "2488",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2488",
        "ok": "2488",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2488",
        "ok": "2488",
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
        "total": "0.014",
        "ok": "0.014",
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
        "total": "180",
        "ok": "138",
        "ko": "42"
    },
    "minResponseTime": {
        "total": "11714",
        "ok": "11714",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "63483",
        "ok": "61300",
        "ko": "63483"
    },
    "meanResponseTime": {
        "total": "45907",
        "ok": "41382",
        "ko": "60775"
    },
    "standardDeviation": {
        "total": "16810",
        "ok": "16747",
        "ko": "1091"
    },
    "percentiles1": {
        "total": "54269",
        "ok": "46843",
        "ko": "60002"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "57674",
        "ko": "61146"
    },
    "percentiles3": {
        "total": "61489",
        "ok": "59955",
        "ko": "63277"
    },
    "percentiles4": {
        "total": "63334",
        "ok": "61048",
        "ko": "63472"
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
    "count": 138,
    "percentage": 77
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 42,
    "percentage": 23
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.466",
        "ok": "1.89",
        "ko": "0.575"
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
