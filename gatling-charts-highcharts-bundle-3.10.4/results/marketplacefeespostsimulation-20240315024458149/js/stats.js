var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "121",
        "ok": "120",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "650",
        "ok": "650",
        "ko": "3841"
    },
    "maxResponseTime": {
        "total": "15729",
        "ok": "15729",
        "ko": "3841"
    },
    "meanResponseTime": {
        "total": "6148",
        "ok": "6167",
        "ko": "3841"
    },
    "standardDeviation": {
        "total": "3686",
        "ok": "3696",
        "ko": "0"
    },
    "percentiles1": {
        "total": "5726",
        "ok": "5729",
        "ko": "3841"
    },
    "percentiles2": {
        "total": "8825",
        "ok": "8867",
        "ko": "3841"
    },
    "percentiles3": {
        "total": "12438",
        "ok": "12446",
        "ko": "3841"
    },
    "percentiles4": {
        "total": "13713",
        "ok": "13716",
        "ko": "3841"
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
    "count": 4,
    "percentage": 3
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 115,
    "percentage": 95
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.559",
        "ok": "3.529",
        "ko": "0.029"
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
        "total": "650",
        "ok": "650",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "650",
        "ok": "650",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "650",
        "ok": "650",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "650",
        "ok": "650",
        "ko": "-"
    },
    "percentiles2": {
        "total": "650",
        "ok": "650",
        "ko": "-"
    },
    "percentiles3": {
        "total": "650",
        "ok": "650",
        "ko": "-"
    },
    "percentiles4": {
        "total": "650",
        "ok": "650",
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
        "total": "0.029",
        "ok": "0.029",
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
        "total": "120",
        "ok": "119",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "884",
        "ok": "884",
        "ko": "3841"
    },
    "maxResponseTime": {
        "total": "15729",
        "ok": "15729",
        "ko": "3841"
    },
    "meanResponseTime": {
        "total": "6193",
        "ok": "6213",
        "ko": "3841"
    },
    "standardDeviation": {
        "total": "3667",
        "ok": "3676",
        "ko": "0"
    },
    "percentiles1": {
        "total": "5729",
        "ok": "5731",
        "ko": "3841"
    },
    "percentiles2": {
        "total": "8867",
        "ok": "8909",
        "ko": "3841"
    },
    "percentiles3": {
        "total": "12446",
        "ok": "12453",
        "ko": "3841"
    },
    "percentiles4": {
        "total": "13716",
        "ok": "13718",
        "ko": "3841"
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
    "count": 4,
    "percentage": 3
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 115,
    "percentage": 96
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.529",
        "ok": "3.5",
        "ko": "0.029"
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
