var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "166",
        "ok": "166",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "685",
        "ok": "685",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "14285",
        "ok": "14285",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5386",
        "ok": "5386",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "4268",
        "ok": "4268",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3415",
        "ok": "3415",
        "ko": "-"
    },
    "percentiles2": {
        "total": "9297",
        "ok": "9297",
        "ko": "-"
    },
    "percentiles3": {
        "total": "12801",
        "ok": "12801",
        "ko": "-"
    },
    "percentiles4": {
        "total": "13788",
        "ok": "13788",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 3,
    "percentage": 2
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 23,
    "percentage": 14
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 140,
    "percentage": 84
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.458",
        "ok": "3.458",
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
        "total": "732",
        "ok": "732",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "732",
        "ok": "732",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "732",
        "ok": "732",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "732",
        "ok": "732",
        "ko": "-"
    },
    "percentiles2": {
        "total": "732",
        "ok": "732",
        "ko": "-"
    },
    "percentiles3": {
        "total": "732",
        "ok": "732",
        "ko": "-"
    },
    "percentiles4": {
        "total": "732",
        "ok": "732",
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
        "total": "0.021",
        "ok": "0.021",
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
        "total": "165",
        "ok": "165",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "685",
        "ok": "685",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "14285",
        "ok": "14285",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5414",
        "ok": "5414",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "4266",
        "ok": "4266",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3442",
        "ok": "3442",
        "ko": "-"
    },
    "percentiles2": {
        "total": "9317",
        "ok": "9317",
        "ko": "-"
    },
    "percentiles3": {
        "total": "12803",
        "ok": "12803",
        "ko": "-"
    },
    "percentiles4": {
        "total": "13789",
        "ok": "13789",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 2,
    "percentage": 1
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 23,
    "percentage": 14
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 140,
    "percentage": 85
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.438",
        "ok": "3.438",
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
