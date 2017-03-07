$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        scale: {
            startValue: 1,
            endValue: 10,
            tickInterval: 1
        },
        geometry: {
            startAngle: -180,
            endAngle: 0
        },
        needles: [{ value: 7 }],
        rangeContainer: {
            ranges: [{
                startValue: 1,
                endValue: 4,
                color: "#E19094" // reddish
            }, {
                startValue: 4,
                endValue: 8,
                color: "#FCBB69" // orangey
            }, {
                startValue: 8,
                endValue: 10,
                color: "#A6C567" // greenish
            }]
        }
    });
});