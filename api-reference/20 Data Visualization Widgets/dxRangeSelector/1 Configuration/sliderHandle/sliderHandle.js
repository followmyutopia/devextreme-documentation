$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        background: { color: 'burlywood' },
        scale: {
            startValue: 0,
            endValue: 10,
            minorTick: { visible: false }
        },
        behavior: {
            snapToTicks: false
        },
        sliderHandle: {
            color: 'brown',
            width: 3,
            opacity: 1
        }
    });
});