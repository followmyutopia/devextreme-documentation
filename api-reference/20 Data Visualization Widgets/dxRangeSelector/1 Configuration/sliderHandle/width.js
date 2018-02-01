$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        background: { color: 'floralwhite' },
        scale: {
            startValue: 0,
            endValue: 10,
            minorTick: { visible: false }
        },
        behavior: {
            snapToTicks: false
        },
        sliderHandle: {
            width: 3
        }
    });
});