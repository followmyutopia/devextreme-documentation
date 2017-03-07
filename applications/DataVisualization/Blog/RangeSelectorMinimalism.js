$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        margin: {
            top: 10
        },
        size: {
            height: 19
        },
        scale: {
            startValue: 0,
            endValue: 100000,
            minorTickInterval: 500,
            showMinorTicks: false,
            tickInterval: 25000,
            showMajorTicks: true,
            label: {
                visible: false
            }
        },
        background: {
            color: 'orange'
        },
        sliderMarker: {
            visible: false
        },
        value: [25000, 35000]
    });
});