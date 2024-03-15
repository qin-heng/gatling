var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "111",
        "ok": "111",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "593",
        "ok": "593",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "20989",
        "ok": "20989",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "11872",
        "ok": "11872",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "5514",
        "ok": "5514",
        "ko": "-"
    },
    "percentiles1": {
        "total": "12572",
        "ok": "12572",
        "ko": "-"
    },
    "percentiles2": {
        "total": "16552",
        "ok": "16552",
        "ko": "-"
    },
    "percentiles3": {
        "total": "19674",
        "ok": "19674",
        "ko": "-"
    },
    "percentiles4": {
        "total": "20878",
        "ok": "20878",
        "ko": "-"
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
    "count": 2,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 108,
    "percentage": 97
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.265",
        "ok": "3.265",
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
        "total": "593",
        "ok": "593",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "593",
        "ok": "593",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "593",
        "ok": "593",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "593",
        "ok": "593",
        "ko": "-"
    },
    "percentiles2": {
        "total": "593",
        "ok": "593",
        "ko": "-"
    },
    "percentiles3": {
        "total": "593",
        "ok": "593",
        "ko": "-"
    },
    "percentiles4": {
        "total": "593",
        "ok": "593",
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
        "total": "110",
        "ok": "110",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "844",
        "ok": "844",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "20989",
        "ok": "20989",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "11974",
        "ok": "11974",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "5432",
        "ok": "5432",
        "ko": "-"
    },
    "percentiles1": {
        "total": "12575",
        "ok": "12575",
        "ko": "-"
    },
    "percentiles2": {
        "total": "16563",
        "ok": "16563",
        "ko": "-"
    },
    "percentiles3": {
        "total": "19678",
        "ok": "19678",
        "ko": "-"
    },
    "percentiles4": {
        "total": "20884",
        "ok": "20884",
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
    "count": 2,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 108,
    "percentage": 98
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.235",
        "ok": "3.235",
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
