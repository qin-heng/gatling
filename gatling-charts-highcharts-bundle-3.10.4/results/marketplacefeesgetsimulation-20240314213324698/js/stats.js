var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "721",
        "ok": "513",
        "ko": "208"
    },
    "minResponseTime": {
        "total": "704",
        "ok": "704",
        "ko": "35462"
    },
    "maxResponseTime": {
        "total": "63375",
        "ok": "59844",
        "ko": "63375"
    },
    "meanResponseTime": {
        "total": "23322",
        "ok": "9756",
        "ko": "56780"
    },
    "standardDeviation": {
        "total": "22893",
        "ok": "9211",
        "ko": "5842"
    },
    "percentiles1": {
        "total": "10604",
        "ok": "6060",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "53594",
        "ok": "12882",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "26795",
        "ko": "60383"
    },
    "percentiles4": {
        "total": "61056",
        "ok": "51396",
        "ko": "62232"
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
    "count": 11,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 499,
    "percentage": 69
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 208,
    "percentage": 29
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.652",
        "ok": "3.31",
        "ko": "1.342"
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
        "total": "929",
        "ok": "929",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "929",
        "ok": "929",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "929",
        "ok": "929",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "929",
        "ok": "929",
        "ko": "-"
    },
    "percentiles2": {
        "total": "929",
        "ok": "929",
        "ko": "-"
    },
    "percentiles3": {
        "total": "929",
        "ok": "929",
        "ko": "-"
    },
    "percentiles4": {
        "total": "929",
        "ok": "929",
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
        "total": "0.006",
        "ok": "0.006",
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
        "ok": "512",
        "ko": "208"
    },
    "minResponseTime": {
        "total": "704",
        "ok": "704",
        "ko": "35462"
    },
    "maxResponseTime": {
        "total": "63375",
        "ok": "59844",
        "ko": "63375"
    },
    "meanResponseTime": {
        "total": "23353",
        "ok": "9774",
        "ko": "56780"
    },
    "standardDeviation": {
        "total": "22894",
        "ok": "9211",
        "ko": "5842"
    },
    "percentiles1": {
        "total": "10706",
        "ok": "6062",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "53647",
        "ok": "12904",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "26796",
        "ko": "60383"
    },
    "percentiles4": {
        "total": "61057",
        "ok": "51637",
        "ko": "62232"
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
    "count": 10,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 499,
    "percentage": 69
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 208,
    "percentage": 29
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.645",
        "ok": "3.303",
        "ko": "1.342"
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
