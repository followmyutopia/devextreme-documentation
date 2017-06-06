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
            marker: { visible: false }
        },
        value: [new Date(year, month, day, 11, 00, 00), new Date(year, month, day, 17, 00, 00)],
        background: {
            image: { url: '/Content/images/doc/17_2/ChartJS/RangeImage.png' }
        },
<!--//highlight-->
        onValueChanged: function (e) {
            $('#textContainer').text('SelectedRange: [' +
                Globalize.formatDate(e.value[0], { time:'short' }) +
                    ', ' + Globalize.formatDate(e.value[1], { time:'short' }) + ']');
        }
<!--//highlight-->
    });
});
