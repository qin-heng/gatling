var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "331",
        "ok": "291",
        "ko": "40"
    },
    "minResponseTime": {
        "total": "618",
        "ok": "618",
        "ko": "10130"
    },
    "maxResponseTime": {
        "total": "30041",
        "ok": "26716",
        "ko": "30041"
    },
    "meanResponseTime": {
        "total": "9045",
        "ok": "7767",
        "ko": "18341"
    },
    "standardDeviation": {
        "total": "7875",
        "ok": "7281",
        "ko": "5397"
    },
    "percentiles1": {
        "total": "5984",
        "ok": "4571",
        "ko": "18155"
    },
    "percentiles2": {
        "total": "16675",
        "ok": "14308",
        "ko": "22763"
    },
    "percentiles3": {
        "total": "23306",
        "ok": "21254",
        "ko": "26887"
    },
    "percentiles4": {
        "total": "26625",
        "ok": "25000",
        "ko": "29055"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 7,
    "percentage": 2
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 34,
    "percentage": 10
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 250,
    "percentage": 76
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 40,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.761",
        "ok": "3.307",
        "ko": "0.455"
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
        "total": "930",
        "ok": "930",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "930",
        "ok": "930",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "930",
        "ok": "930",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "930",
        "ok": "930",
        "ko": "-"
    },
    "percentiles2": {
        "total": "930",
        "ok": "930",
        "ko": "-"
    },
    "percentiles3": {
        "total": "930",
        "ok": "930",
        "ko": "-"
    },
    "percentiles4": {
        "total": "930",
        "ok": "930",
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
        "total": "0.011",
        "ok": "0.011",
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
        "total": "330",
        "ok": "290",
        "ko": "40"
    },
    "minResponseTime": {
        "total": "618",
        "ok": "618",
        "ko": "10130"
    },
    "maxResponseTime": {
        "total": "30041",
        "ok": "26716",
        "ko": "30041"
    },
    "meanResponseTime": {
        "total": "9070",
        "ok": "7791",
        "ko": "18341"
    },
    "standardDeviation": {
        "total": "7874",
        "ok": "7283",
        "ko": "5397"
    },
    "percentiles1": {
        "total": "5984",
        "ok": "4584",
        "ko": "18155"
    },
    "percentiles2": {
        "total": "16696",
        "ok": "14435",
        "ko": "22763"
    },
    "percentiles3": {
        "total": "23339",
        "ok": "21254",
        "ko": "26887"
    },
    "percentiles4": {
        "total": "26628",
        "ok": "25002",
        "ko": "29055"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 7,
    "percentage": 2
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 33,
    "percentage": 10
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 250,
    "percentage": 76
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 40,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.75",
        "ok": "3.295",
        "ko": "0.455"
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
