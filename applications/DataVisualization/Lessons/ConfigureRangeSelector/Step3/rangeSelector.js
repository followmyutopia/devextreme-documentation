var today = new Date(),
    year = today.getFullYear(),
    month = today.getMonth(),
    day = today.getDate();

$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: new Date(year, month, day, 00, 00, 00),
            endValue: new Date(year, month, day, 24, 00, 00),
            minorTickInterval: 'hour',
            tickInterval: { hours: 3 },
<!--//highlight-->
            marker: { visible: false }
<!--//highlight-->
        },
        value: [new Date(year, month, day, 11, 00, 00), new Date(year, month, day, 17, 00, 00)],
<!--//highlight-->
        background: {
            image: { url: '/Content/images/doc/17_2/ChartJS/RangeImage.png' }
        }
<!--//highlight-->
    });
});
