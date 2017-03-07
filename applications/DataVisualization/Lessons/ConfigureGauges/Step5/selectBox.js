$(function () {
    $("#citySelector").dxSelectBox({
        dataSource: [
            { city: 'London', woeid: 44418 },
            { city: 'Berlin', woeid: 638242 },
            { city: 'New York', woeid: 2459115 },
            { city: 'Moscow', woeid: 24553382 },
            { city: 'Bangkok', woeid: 1225448 }
        ],
        displayExpr: 'city',
        valueExpr: 'woeid',
        placeholder: 'Select a city...',
<!--//highlight-->
        onValueChanged: function (e) {
            var cityCode = e.value,
                circularGauge = $('#circularGaugeContainer').dxCircularGauge('instance'),
                query = 'select item.condition.temp from weather.forecast where woeid="' + cityCode + '" and u="c"',
                url = "https://query.yahooapis.com/v1/public/yql?format=json&q=" + escape(query);

            $.ajax(url, { dataType: 'jsonp' }).done(function (data) {
                var forecast = data.query.results;
                if (forecast) {
                    circularGauge.value(forecast.channel.item.condition.temp);
                }
            });
        }
<!--//highlight-->
    });
});
