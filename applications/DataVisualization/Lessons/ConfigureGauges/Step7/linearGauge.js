$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        geometry: { orientation: 'vertical' },
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
        valueIndicator: { color: 'red', offset: 10 },
        subvalues: [19],
        subvalueIndicator: { color: 'green', offset: -5 },
        rangeContainer: {
            ranges: [
                { startValue: -50, endValue: 0,  color: 'blue' },
                { startValue: 0,   endValue: 50, color: 'red' }
            ],
            offset: -5
        }
    });
});
