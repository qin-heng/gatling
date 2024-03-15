var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "721",
        "ok": "676",
        "ko": "45"
    },
    "minResponseTime": {
        "total": "576",
        "ok": "576",
        "ko": "4242"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "57395",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "16073",
        "ok": "15288",
        "ko": "27867"
    },
    "standardDeviation": {
        "total": "13838",
        "ok": "13241",
        "ko": "16908"
    },
    "percentiles1": {
        "total": "12617",
        "ok": "11808",
        "ko": "25321"
    },
    "percentiles2": {
        "total": "24747",
        "ok": "23981",
        "ko": "42233"
    },
    "percentiles3": {
        "total": "45874",
        "ok": "43124",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "55306",
        "ok": "53545",
        "ko": "60001"
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
    "count": 4,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 670,
    "percentage": 93
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 45,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.462",
        "ok": "5.121",
        "ko": "0.341"
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
        "total": "672",
        "ok": "672",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "672",
        "ok": "672",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "672",
        "ok": "672",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "672",
        "ok": "672",
        "ko": "-"
    },
    "percentiles2": {
        "total": "672",
        "ok": "672",
        "ko": "-"
    },
    "percentiles3": {
        "total": "672",
        "ok": "672",
        "ko": "-"
    },
    "percentiles4": {
        "total": "672",
        "ok": "672",
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
        "total": "0.008",
        "ok": "0.008",
        "ko": "-"
    }
}
    },"req_get-all-marketp-114750891": {
        type: "REQUEST",
        name: "Get all marketplace fees",
path: "Get all marketplace fees",
pathFormatted: "req_get-all-marketp-114750891",
stats: {
    "name": "Get all marketplace fees",
    "numberOfRequests": {
        "total": "720",
        "ok": "675",
        "ko": "45"
    },
    "minResponseTime": {
        "total": "576",
        "ok": "576",
        "ko": "4242"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "57395",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "16094",
        "ok": "15310",
        "ko": "27867"
    },
    "standardDeviation": {
        "total": "13835",
        "ok": "13239",
        "ko": "16908"
    },
    "percentiles1": {
        "total": "12648",
        "ok": "11848",
        "ko": "25321"
    },
    "percentiles2": {
        "total": "24758",
        "ok": "24000",
        "ko": "42233"
    },
    "percentiles3": {
        "total": "45906",
        "ok": "43128",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "55318",
        "ok": "53549",
        "ko": "60001"
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
    "count": 4,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 670,
    "percentage": 93
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 45,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.455",
        "ok": "5.114",
        "ko": "0.341"
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
