$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
<!--//highlight-->
        scale: {
            startValue: -50,
            endValue: 50
        },
        value: 24,
        subvalues: [19],
        rangeContainer: {
            ranges: [
                { startValue: -50, endValue: 0,  color: 'blue' },
                { startValue: 0,   endValue: 50, color: 'red' }
            ]
        }
<!--//highlight-->
    });
});
