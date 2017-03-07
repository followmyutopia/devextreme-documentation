$(function () {
    var positiveVotes = 33,
        negativeVotes = 57,
        positivePercentage = function () {
            return positiveVotes * 100 / (negativeVotes + positiveVotes);
        };

    $("#linearGaugeContainer").dxLinearGauge({
        scale: {
            startValue: 0,
            endValue: 100,
            label: { visible: false }
        },
        markers: [
            { value: positivePercentage(), offset: -5 }
        ],
        rangeBars: [
            { value: positivePercentage(), color: "green", backgroundColor: "red", offset: -5 }
        ]
    });

    $("button.vote").click(function () {
        var gauge = $("#linearGaugeContainer").dxLinearGauge("instance");
        if ($(this).data("sign") === "plus") {
            positiveVotes++;
        } else {
            negativeVotes++;
        }
        gauge.rangeBarValue(0, positivePercentage());
        gauge.markerValue(0, positivePercentage());
    });
});