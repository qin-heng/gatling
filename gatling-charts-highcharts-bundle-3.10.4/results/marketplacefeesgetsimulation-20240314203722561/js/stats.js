var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "181",
        "ok": "181",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2502",
        "ok": "2502",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "56911",
        "ok": "56911",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "40935",
        "ok": "40935",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "15987",
        "ok": "15987",
        "ko": "-"
    },
    "percentiles1": {
        "total": "49259",
        "ok": "49259",
        "ko": "-"
    },
    "percentiles2": {
        "total": "54364",
        "ok": "54364",
        "ko": "-"
    },
    "percentiles3": {
        "total": "56244",
        "ok": "56244",
        "ko": "-"
    },
    "percentiles4": {
        "total": "56465",
        "ok": "56465",
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
    "count": 181,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.742",
        "ok": "2.742",
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
        "total": "2502",
        "ok": "2502",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2502",
        "ok": "2502",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2502",
        "ok": "2502",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2502",
        "ok": "2502",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2502",
        "ok": "2502",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2502",
        "ok": "2502",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2502",
        "ok": "2502",
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
        "total": "0.015",
        "ok": "0.015",
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
        "ok": "180",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "11036",
        "ok": "11036",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "56911",
        "ok": "56911",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "41148",
        "ok": "41148",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "15772",
        "ok": "15772",
        "ko": "-"
    },
    "percentiles1": {
        "total": "49408",
        "ok": "49408",
        "ko": "-"
    },
    "percentiles2": {
        "total": "54367",
        "ok": "54367",
        "ko": "-"
    },
    "percentiles3": {
        "total": "56246",
        "ok": "56246",
        "ko": "-"
    },
    "percentiles4": {
        "total": "56466",
        "ok": "56466",
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
    "count": 180,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.727",
        "ok": "2.727",
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
