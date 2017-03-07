$(function () {
    $("#barGaugeContainer").dxBarGauge({
        startValue: -50,
        endValue: 50,
        values: [-21.312, 14.833, -30.91, 45.2, 7],
        palette: 'Pastel',
        tooltip: {
            enabled: true,
            format: {
                type: 'fixedPoint',
                precision: 2
            },
            font: { family: 'Segoe UI' }
        }
    });
});