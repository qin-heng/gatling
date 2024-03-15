var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "631",
        "ok": "631",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "644",
        "ok": "644",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "11234",
        "ok": "11234",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3152",
        "ok": "3152",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1779",
        "ok": "1779",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2729",
        "ok": "2729",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4076",
        "ok": "4076",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6608",
        "ok": "6608",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8790",
        "ok": "8790",
        "ko": "-"
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
    "count": 44,
    "percentage": 7
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 585,
    "percentage": 93
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.126",
        "ok": "6.126",
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
        "total": "644",
        "ok": "644",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "644",
        "ok": "644",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "644",
        "ok": "644",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "644",
        "ok": "644",
        "ko": "-"
    },
    "percentiles2": {
        "total": "644",
        "ok": "644",
        "ko": "-"
    },
    "percentiles3": {
        "total": "644",
        "ok": "644",
        "ko": "-"
    },
    "percentiles4": {
        "total": "644",
        "ok": "644",
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
        "total": "0.01",
        "ok": "0.01",
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
        "total": "630",
        "ok": "630",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "760",
        "ok": "760",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "11234",
        "ok": "11234",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3155",
        "ok": "3155",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1777",
        "ok": "1777",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2729",
        "ok": "2729",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4079",
        "ok": "4079",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6609",
        "ok": "6609",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8791",
        "ok": "8791",
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
    "count": 44,
    "percentage": 7
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 585,
    "percentage": 93
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.117",
        "ok": "6.117",
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
