var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "211",
        "ok": "211",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "663",
        "ok": "663",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "47351",
        "ok": "47351",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "29079",
        "ok": "29079",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "10512",
        "ok": "10512",
        "ko": "-"
    },
    "percentiles1": {
        "total": "27559",
        "ok": "27559",
        "ko": "-"
    },
    "percentiles2": {
        "total": "38827",
        "ok": "38827",
        "ko": "-"
    },
    "percentiles3": {
        "total": "44363",
        "ok": "44363",
        "ko": "-"
    },
    "percentiles4": {
        "total": "45927",
        "ok": "45927",
        "ko": "-"
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
    "count": 210,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.638",
        "ok": "3.638",
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
        "total": "663",
        "ok": "663",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "663",
        "ok": "663",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "663",
        "ok": "663",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "663",
        "ok": "663",
        "ko": "-"
    },
    "percentiles2": {
        "total": "663",
        "ok": "663",
        "ko": "-"
    },
    "percentiles3": {
        "total": "663",
        "ok": "663",
        "ko": "-"
    },
    "percentiles4": {
        "total": "663",
        "ok": "663",
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
        "total": "0.017",
        "ok": "0.017",
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
        "total": "210",
        "ok": "210",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1501",
        "ok": "1501",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "47351",
        "ok": "47351",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "29214",
        "ok": "29214",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "10353",
        "ok": "10353",
        "ko": "-"
    },
    "percentiles1": {
        "total": "27757",
        "ok": "27757",
        "ko": "-"
    },
    "percentiles2": {
        "total": "38869",
        "ok": "38869",
        "ko": "-"
    },
    "percentiles3": {
        "total": "44378",
        "ok": "44378",
        "ko": "-"
    },
    "percentiles4": {
        "total": "45928",
        "ok": "45928",
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
    "count": 210,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.621",
        "ok": "3.621",
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
