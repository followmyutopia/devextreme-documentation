$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        rangeContainer: { backgroundColor: 'turquoise' },
        scale: {
            startValue: 0,
            endValue: 100,
            label: {
                font: {
                    family: 'Zapf-Chancery, cursive'
                }
            }
        },
        value: 32
    });
});