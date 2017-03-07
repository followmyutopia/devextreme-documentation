<!--//highlight-->
<!--//highlight-->
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
        valueIndicator: { color: 'red', spindleGapSize: 5 },
        subvalues: [19],
        subvalueIndicator: { color: 'green' },
        rangeContainer: {
            ranges: [
                { startValue: -50, endValue: 0,  color: 'blue' },
                { startValue: 0,   endValue: 50, color: 'red' }
            ],
            offset: 5
        }
    });
});
