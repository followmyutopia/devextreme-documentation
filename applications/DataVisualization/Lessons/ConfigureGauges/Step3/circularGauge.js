$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        scale: {
            startValue: -50,
            endValue: 50,
<!--//highlight-->
            tick: { color: 'black' },
            tickInterval: 10,
            minorTick: {
                visible: true,
                color: 'black'
            },
            minorTickInterval: 1
<!--//highlight-->
        },
        value: 24,
        subvalues: [19],
        rangeContainer: {
            ranges: [
                { startValue: -50, endValue: 0,  color: 'blue' },
                { startValue: 0,   endValue: 50, color: 'red' }
            ],
<!--//highlight-->
            offset: 5
<!--//highlight-->
        }
    });
});
