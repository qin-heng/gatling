var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "111",
        "ok": "110",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "968",
        "ok": "968",
        "ko": "19510"
    },
    "maxResponseTime": {
        "total": "23049",
        "ok": "23049",
        "ko": "19510"
    },
    "meanResponseTime": {
        "total": "12063",
        "ok": "11996",
        "ko": "19510"
    },
    "standardDeviation": {
        "total": "5738",
        "ok": "5719",
        "ko": "0"
    },
    "percentiles1": {
        "total": "12768",
        "ok": "12693",
        "ko": "19510"
    },
    "percentiles2": {
        "total": "16759",
        "ok": "16701",
        "ko": "19510"
    },
    "percentiles3": {
        "total": "20118",
        "ok": "20119",
        "ko": "19510"
    },
    "percentiles4": {
        "total": "21353",
        "ok": "21354",
        "ko": "19510"
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
    "count": 1,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 109,
    "percentage": 98
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.921",
        "ok": "2.895",
        "ko": "0.026"
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
        "total": "968",
        "ok": "968",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "968",
        "ok": "968",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "968",
        "ok": "968",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "968",
        "ok": "968",
        "ko": "-"
    },
    "percentiles2": {
        "total": "968",
        "ok": "968",
        "ko": "-"
    },
    "percentiles3": {
        "total": "968",
        "ok": "968",
        "ko": "-"
    },
    "percentiles4": {
        "total": "968",
        "ok": "968",
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
    "count": 1,
    "percentage": 100
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
        "total": "0.026",
        "ok": "0.026",
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
        "ok": "109",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "1372",
        "ok": "1372",
        "ko": "19510"
    },
    "maxResponseTime": {
        "total": "23049",
        "ok": "23049",
        "ko": "19510"
    },
    "meanResponseTime": {
        "total": "12164",
        "ok": "12097",
        "ko": "19510"
    },
    "standardDeviation": {
        "total": "5665",
        "ok": "5647",
        "ko": "0"
    },
    "percentiles1": {
        "total": "12900",
        "ok": "12768",
        "ko": "19510"
    },
    "percentiles2": {
        "total": "16786",
        "ok": "16704",
        "ko": "19510"
    },
    "percentiles3": {
        "total": "20119",
        "ok": "20121",
        "ko": "19510"
    },
    "percentiles4": {
        "total": "21354",
        "ok": "21355",
        "ko": "19510"
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
    "count": 109,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.895",
        "ok": "2.868",
        "ko": "0.026"
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
