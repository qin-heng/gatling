var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "464",
        "ok": "458",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "745",
        "ok": "745",
        "ko": "6536"
    },
    "maxResponseTime": {
        "total": "23299",
        "ok": "23299",
        "ko": "18751"
    },
    "meanResponseTime": {
        "total": "8181",
        "ok": "8115",
        "ko": "13193"
    },
    "standardDeviation": {
        "total": "4391",
        "ok": "4357",
        "ko": "4072"
    },
    "percentiles1": {
        "total": "7119",
        "ok": "7058",
        "ko": "13543"
    },
    "percentiles2": {
        "total": "10719",
        "ok": "10556",
        "ko": "16077"
    },
    "percentiles3": {
        "total": "16933",
        "ok": "16706",
        "ko": "18136"
    },
    "percentiles4": {
        "total": "20090",
        "ok": "20099",
        "ko": "18628"
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
    "count": 457,
    "percentage": 98
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 6,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.105",
        "ok": "6.026",
        "ko": "0.079"
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
        "total": "745",
        "ok": "745",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "745",
        "ok": "745",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "745",
        "ok": "745",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "745",
        "ok": "745",
        "ko": "-"
    },
    "percentiles2": {
        "total": "745",
        "ok": "745",
        "ko": "-"
    },
    "percentiles3": {
        "total": "745",
        "ok": "745",
        "ko": "-"
    },
    "percentiles4": {
        "total": "745",
        "ok": "745",
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
    },"req_post-marketplac--1275212350": {
        type: "REQUEST",
        name: "Post marketplace fees",
path: "Post marketplace fees",
pathFormatted: "req_post-marketplac--1275212350",
stats: {
    "name": "Post marketplace fees",
    "numberOfRequests": {
        "total": "463",
        "ok": "457",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "1483",
        "ok": "1483",
        "ko": "6536"
    },
    "maxResponseTime": {
        "total": "23299",
        "ok": "23299",
        "ko": "18751"
    },
    "meanResponseTime": {
        "total": "8197",
        "ok": "8132",
        "ko": "13193"
    },
    "standardDeviation": {
        "total": "4382",
        "ok": "4348",
        "ko": "4072"
    },
    "percentiles1": {
        "total": "7127",
        "ok": "7080",
        "ko": "13543"
    },
    "percentiles2": {
        "total": "10739",
        "ok": "10564",
        "ko": "16077"
    },
    "percentiles3": {
        "total": "16949",
        "ok": "16723",
        "ko": "18136"
    },
    "percentiles4": {
        "total": "20092",
        "ok": "20101",
        "ko": "18628"
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
    "count": 457,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 6,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.092",
        "ok": "6.013",
        "ko": "0.079"
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
