$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: 0,
            endValue: 10,
            minorTick: { visible: false },
            tickInterval: 2
        }
    });
});
