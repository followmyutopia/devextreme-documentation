$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: 0,
            endValue: 100000,
            showMinorTicks: false,
            tickInterval: 25000,
            showMajorTicks: true,
            label: {
                visible: false,
                format: 'currency'
            }
        },
        background: {
            color: 'orange'
        },
        sliderMarker: {
            visible: true,
            format: 'currency'
        },
        value: [40000, 80000]
    });
});