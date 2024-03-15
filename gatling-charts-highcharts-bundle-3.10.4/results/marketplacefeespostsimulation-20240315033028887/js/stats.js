var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "721",
        "ok": "715",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "661",
        "ok": "661",
        "ko": "16902"
    },
    "maxResponseTime": {
        "total": "23902",
        "ok": "22919",
        "ko": "23902"
    },
    "meanResponseTime": {
        "total": "5336",
        "ok": "5214",
        "ko": "19980"
    },
    "standardDeviation": {
        "total": "4590",
        "ok": "4401",
        "ko": "2791"
    },
    "percentiles1": {
        "total": "3396",
        "ok": "3352",
        "ko": "18836"
    },
    "percentiles2": {
        "total": "6858",
        "ok": "6727",
        "ko": "22568"
    },
    "percentiles3": {
        "total": "16010",
        "ok": "15400",
        "ko": "23852"
    },
    "percentiles4": {
        "total": "19161",
        "ok": "18219",
        "ko": "23892"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 4,
    "percentage": 1
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 21,
    "percentage": 3
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 690,
    "percentage": 96
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 6,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.381",
        "ok": "6.327",
        "ko": "0.053"
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
        "total": "702",
        "ok": "702",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "702",
        "ok": "702",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "702",
        "ok": "702",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "702",
        "ok": "702",
        "ko": "-"
    },
    "percentiles2": {
        "total": "702",
        "ok": "702",
        "ko": "-"
    },
    "percentiles3": {
        "total": "702",
        "ok": "702",
        "ko": "-"
    },
    "percentiles4": {
        "total": "702",
        "ok": "702",
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
        "total": "0.009",
        "ok": "0.009",
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
        "total": "720",
        "ok": "714",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "661",
        "ok": "661",
        "ko": "16902"
    },
    "maxResponseTime": {
        "total": "23902",
        "ok": "22919",
        "ko": "23902"
    },
    "meanResponseTime": {
        "total": "5343",
        "ok": "5220",
        "ko": "19980"
    },
    "standardDeviation": {
        "total": "4590",
        "ok": "4400",
        "ko": "2791"
    },
    "percentiles1": {
        "total": "3397",
        "ok": "3358",
        "ko": "18836"
    },
    "percentiles2": {
        "total": "6873",
        "ok": "6731",
        "ko": "22568"
    },
    "percentiles3": {
        "total": "16015",
        "ok": "15402",
        "ko": "23852"
    },
    "percentiles4": {
        "total": "19162",
        "ok": "18219",
        "ko": "23892"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 3,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 21,
    "percentage": 3
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 690,
    "percentage": 96
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 6,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.372",
        "ok": "6.319",
        "ko": "0.053"
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
