$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: 0,
            endValue: 100000,
            minorTickInterval: 500,
            showMinorTicks: false,
            tickInterval: 25000,
            showMajorTicks: true,

            label: {
                visible: true,
                format: 'currency'
            }
        },
        background: {
            color: 'orange'
        },
        sliderMarker: {
            visible: true,
            format: 'currency',
            placeholderSize: {
                width: 100
            }
        },
        value: [25000, 35000]
    });
});