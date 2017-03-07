$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: new Date(2005, 0, 1),
            endValue: new Date(2011, 6, 1),
            minorTickInterval: { month: 1 },
            tickInterval: { year: 1 },
            showMinorTicks: true
        },
        sliderMarker: {
            format: "month"
        },
        selectedRange: {
            startValue: new Date(2006, 4, 1),
            endValue: new Date(2009, 2, 1)
        }
    });
});