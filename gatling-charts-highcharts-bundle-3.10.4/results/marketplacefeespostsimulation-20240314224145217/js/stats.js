var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "81",
        "ok": "81",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "708",
        "ok": "708",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "20370",
        "ok": "20370",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "14357",
        "ok": "14357",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "4939",
        "ok": "4939",
        "ko": "-"
    },
    "percentiles1": {
        "total": "16058",
        "ok": "16058",
        "ko": "-"
    },
    "percentiles2": {
        "total": "18296",
        "ok": "18296",
        "ko": "-"
    },
    "percentiles3": {
        "total": "20252",
        "ok": "20252",
        "ko": "-"
    },
    "percentiles4": {
        "total": "20361",
        "ok": "20361",
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
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 80,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.893",
        "ok": "2.893",
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
        "total": "708",
        "ok": "708",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "708",
        "ok": "708",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "708",
        "ok": "708",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "708",
        "ok": "708",
        "ko": "-"
    },
    "percentiles2": {
        "total": "708",
        "ok": "708",
        "ko": "-"
    },
    "percentiles3": {
        "total": "708",
        "ok": "708",
        "ko": "-"
    },
    "percentiles4": {
        "total": "708",
        "ok": "708",
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
        "total": "0.036",
        "ok": "0.036",
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
        "total": "80",
        "ok": "80",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "4542",
        "ok": "4542",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "20370",
        "ok": "20370",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "14527",
        "ok": "14527",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "4726",
        "ok": "4726",
        "ko": "-"
    },
    "percentiles1": {
        "total": "16062",
        "ok": "16062",
        "ko": "-"
    },
    "percentiles2": {
        "total": "18319",
        "ok": "18319",
        "ko": "-"
    },
    "percentiles3": {
        "total": "20252",
        "ok": "20252",
        "ko": "-"
    },
    "percentiles4": {
        "total": "20361",
        "ok": "20361",
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
    "count": 80,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.857",
        "ok": "2.857",
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
