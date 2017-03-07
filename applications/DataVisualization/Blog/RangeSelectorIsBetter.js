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
        selectedRange: {
            startValue: 40000,
            endValue: 80000
        }
    });
});