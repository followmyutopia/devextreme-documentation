﻿$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        background: { color: 'lightgray' },
        scale: {
            startValue: 0,
            endValue: 10,
            minorTick: { visible: false }
        },
        behavior: {
            snapToTicks: false
        },
        sliderHandle: {
            opacity: 0.4
        }
    });
});