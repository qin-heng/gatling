var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "211",
        "ok": "164",
        "ko": "47"
    },
    "minResponseTime": {
        "total": "687",
        "ok": "687",
        "ko": "11508"
    },
    "maxResponseTime": {
        "total": "30056",
        "ok": "29924",
        "ko": "30056"
    },
    "meanResponseTime": {
        "total": "16957",
        "ok": "13417",
        "ko": "29310"
    },
    "standardDeviation": {
        "total": "11322",
        "ok": "10323",
        "ko": "2706"
    },
    "percentiles1": {
        "total": "15411",
        "ok": "9728",
        "ko": "30041"
    },
    "percentiles2": {
        "total": "28924",
        "ok": "25431",
        "ko": "30043"
    },
    "percentiles3": {
        "total": "30043",
        "ok": "29158",
        "ko": "30046"
    },
    "percentiles4": {
        "total": "30046",
        "ok": "29836",
        "ko": "30052"
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
    "count": 7,
    "percentage": 3
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 156,
    "percentage": 74
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 47,
    "percentage": 22
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.768",
        "ok": "2.929",
        "ko": "0.839"
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
        "total": "687",
        "ok": "687",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "687",
        "ok": "687",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "687",
        "ok": "687",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "687",
        "ok": "687",
        "ko": "-"
    },
    "percentiles2": {
        "total": "687",
        "ok": "687",
        "ko": "-"
    },
    "percentiles3": {
        "total": "687",
        "ok": "687",
        "ko": "-"
    },
    "percentiles4": {
        "total": "687",
        "ok": "687",
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
        "total": "0.018",
        "ok": "0.018",
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
        "total": "210",
        "ok": "163",
        "ko": "47"
    },
    "minResponseTime": {
        "total": "919",
        "ok": "919",
        "ko": "11508"
    },
    "maxResponseTime": {
        "total": "30056",
        "ok": "29924",
        "ko": "30056"
    },
    "meanResponseTime": {
        "total": "17035",
        "ok": "13495",
        "ko": "29310"
    },
    "standardDeviation": {
        "total": "11293",
        "ok": "10306",
        "ko": "2706"
    },
    "percentiles1": {
        "total": "15584",
        "ok": "9748",
        "ko": "30041"
    },
    "percentiles2": {
        "total": "28934",
        "ok": "25471",
        "ko": "30043"
    },
    "percentiles3": {
        "total": "30043",
        "ok": "29159",
        "ko": "30046"
    },
    "percentiles4": {
        "total": "30046",
        "ok": "29836",
        "ko": "30052"
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
    "count": 7,
    "percentage": 3
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 156,
    "percentage": 74
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 47,
    "percentage": 22
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.75",
        "ok": "2.911",
        "ko": "0.839"
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
