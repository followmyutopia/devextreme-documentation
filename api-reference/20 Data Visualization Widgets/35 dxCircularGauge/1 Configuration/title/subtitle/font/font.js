$(function () {
    $('#circularGaugeContainer').dxCircularGauge({
        rangeContainer: { backgroundColor: 'burlywood' },
        scale: {
            startValue: 0,
            endValue: 1000
        },
        value: 750,
        title: {
            text: 'Fan Speed',
            subtitle: {
                text: '(in rotations per minute)',
                font: {
                    family: 'Zapf-Chancery, cursive',
                    weight: 400,
                    color: 'darkgray',
                    size: 12
                }
            }
        }
    });
})