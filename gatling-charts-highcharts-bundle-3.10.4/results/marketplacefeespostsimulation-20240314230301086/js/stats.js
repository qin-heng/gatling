var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "91",
        "ok": "28",
        "ko": "63"
    },
    "minResponseTime": {
        "total": "720",
        "ok": "720",
        "ko": "23878"
    },
    "maxResponseTime": {
        "total": "34341",
        "ok": "25296",
        "ko": "34341"
    },
    "meanResponseTime": {
        "total": "23176",
        "ok": "12095",
        "ko": "28100"
    },
    "standardDeviation": {
        "total": "8793",
        "ok": "7220",
        "ko": "3113"
    },
    "percentiles1": {
        "total": "24616",
        "ok": "10749",
        "ko": "29029"
    },
    "percentiles2": {
        "total": "29223",
        "ok": "18568",
        "ko": "30007"
    },
    "percentiles3": {
        "total": "32434",
        "ok": "22974",
        "ko": "33318"
    },
    "percentiles4": {
        "total": "34121",
        "ok": "24842",
        "ko": "34190"
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
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 27,
    "percentage": 30
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 63,
    "percentage": 69
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.116",
        "ok": "0.651",
        "ko": "1.465"
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
        "total": "720",
        "ok": "720",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "720",
        "ok": "720",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "720",
        "ok": "720",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "720",
        "ok": "720",
        "ko": "-"
    },
    "percentiles2": {
        "total": "720",
        "ok": "720",
        "ko": "-"
    },
    "percentiles3": {
        "total": "720",
        "ok": "720",
        "ko": "-"
    },
    "percentiles4": {
        "total": "720",
        "ok": "720",
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
        "total": "0.023",
        "ok": "0.023",
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
        "total": "90",
        "ok": "27",
        "ko": "63"
    },
    "minResponseTime": {
        "total": "3300",
        "ok": "3300",
        "ko": "23878"
    },
    "maxResponseTime": {
        "total": "34341",
        "ok": "25296",
        "ko": "34341"
    },
    "meanResponseTime": {
        "total": "23425",
        "ok": "12517",
        "ko": "28100"
    },
    "standardDeviation": {
        "total": "8515",
        "ok": "7006",
        "ko": "3113"
    },
    "percentiles1": {
        "total": "24881",
        "ok": "11237",
        "ko": "29029"
    },
    "percentiles2": {
        "total": "29224",
        "ok": "18585",
        "ko": "30007"
    },
    "percentiles3": {
        "total": "32437",
        "ok": "23066",
        "ko": "33318"
    },
    "percentiles4": {
        "total": "34124",
        "ok": "24859",
        "ko": "34190"
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
    "count": 27,
    "percentage": 30
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 63,
    "percentage": 70
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.093",
        "ok": "0.628",
        "ko": "1.465"
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
