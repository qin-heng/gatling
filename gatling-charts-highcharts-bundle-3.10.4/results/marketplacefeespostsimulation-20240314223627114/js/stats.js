var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "71",
        "ok": "71",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1264",
        "ok": "1264",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "21197",
        "ok": "21197",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "12910",
        "ok": "12910",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "5508",
        "ok": "5508",
        "ko": "-"
    },
    "percentiles1": {
        "total": "13600",
        "ok": "13600",
        "ko": "-"
    },
    "percentiles2": {
        "total": "17507",
        "ok": "17507",
        "ko": "-"
    },
    "percentiles3": {
        "total": "20911",
        "ok": "20911",
        "ko": "-"
    },
    "percentiles4": {
        "total": "21133",
        "ok": "21133",
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
    "count": 71,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.448",
        "ok": "2.448",
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
        "total": "1264",
        "ok": "1264",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1264",
        "ok": "1264",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1264",
        "ok": "1264",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1264",
        "ok": "1264",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1264",
        "ok": "1264",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1264",
        "ok": "1264",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1264",
        "ok": "1264",
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
        "total": "0.034",
        "ok": "0.034",
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
        "total": "70",
        "ok": "70",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1453",
        "ok": "1453",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "21197",
        "ok": "21197",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "13077",
        "ok": "13077",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "5367",
        "ok": "5367",
        "ko": "-"
    },
    "percentiles1": {
        "total": "13606",
        "ok": "13606",
        "ko": "-"
    },
    "percentiles2": {
        "total": "17818",
        "ok": "17818",
        "ko": "-"
    },
    "percentiles3": {
        "total": "20913",
        "ok": "20913",
        "ko": "-"
    },
    "percentiles4": {
        "total": "21134",
        "ok": "21134",
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
    "count": 70,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.414",
        "ok": "2.414",
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
