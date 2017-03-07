<!--//highlight-->
var today = new Date(),
    year = today.getFullYear(),
    month = today.getMonth(),
    day = today.getDate();
<!--//highlight-->

$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
<!--//highlight-->
        scale: {
            startValue: new Date(year, month, day, 00, 00, 00),
            endValue: new Date(year, month, day, 24, 00, 00),
            minorTickInterval: 'hour',
            tickInterval: { hours: 3 }
        },
        selectedRange: {
            startValue: new Date(year, month, day, 11, 00, 00),
            endValue: new Date(year, month, day, 17, 00, 00)
        }
<!--//highlight-->
    });
});
