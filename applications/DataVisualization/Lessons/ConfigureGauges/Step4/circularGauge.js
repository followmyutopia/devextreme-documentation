$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        scale: {
            startValue: -50,
            endValue: 50,
            tick: { color: 'black' },
            tickInterval: 10,
            minorTick: {
                visible: true,
                color: 'black'
            },
            minorTickInterval: 1
        },
        value: 24,
<!--//highlight-->
        valueIndicator: { color: 'red', spindleGapSize: 5 },
<!--//highlight-->
        subvalues: [19],
<!--//highlight-->
        subvalueIndicator: { color: 'green' },
<!--//highlight-->
        rangeContainer: {
            ranges: [
                { startValue: -50, endValue: 0,  color: 'blue' },
                { startValue: 0,   endValue: 50, color: 'red' }
            ],
            offset: 5
        }
    });
});
