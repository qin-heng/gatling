var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "721",
        "ok": "470",
        "ko": "251"
    },
    "minResponseTime": {
        "total": "756",
        "ok": "756",
        "ko": "27441"
    },
    "maxResponseTime": {
        "total": "69459",
        "ok": "59582",
        "ko": "69459"
    },
    "meanResponseTime": {
        "total": "25373",
        "ok": "10314",
        "ko": "53571"
    },
    "standardDeviation": {
        "total": "23218",
        "ok": "11165",
        "ko": "9763"
    },
    "percentiles1": {
        "total": "15098",
        "ok": "5759",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "50937",
        "ok": "14314",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "28339",
        "ko": "62184"
    },
    "percentiles4": {
        "total": "64554",
        "ok": "58489",
        "ko": "66664"
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
    "count": 8,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 460,
    "percentage": 64
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 251,
    "percentage": 35
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.652",
        "ok": "3.032",
        "ko": "1.619"
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
        "total": "756",
        "ok": "756",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "756",
        "ok": "756",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "756",
        "ok": "756",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "756",
        "ok": "756",
        "ko": "-"
    },
    "percentiles2": {
        "total": "756",
        "ok": "756",
        "ko": "-"
    },
    "percentiles3": {
        "total": "756",
        "ok": "756",
        "ko": "-"
    },
    "percentiles4": {
        "total": "756",
        "ok": "756",
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
        "total": "0.006",
        "ok": "0.006",
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
        "ok": "469",
        "ko": "251"
    },
    "minResponseTime": {
        "total": "780",
        "ok": "780",
        "ko": "27441"
    },
    "maxResponseTime": {
        "total": "69459",
        "ok": "59582",
        "ko": "69459"
    },
    "meanResponseTime": {
        "total": "25407",
        "ok": "10335",
        "ko": "53571"
    },
    "standardDeviation": {
        "total": "23216",
        "ok": "11168",
        "ko": "9763"
    },
    "percentiles1": {
        "total": "15126",
        "ok": "5768",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "50988",
        "ok": "14336",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "28342",
        "ko": "62184"
    },
    "percentiles4": {
        "total": "64566",
        "ok": "58494",
        "ko": "66664"
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
    "count": 8,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 460,
    "percentage": 64
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 251,
    "percentage": 35
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.645",
        "ok": "3.026",
        "ko": "1.619"
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
