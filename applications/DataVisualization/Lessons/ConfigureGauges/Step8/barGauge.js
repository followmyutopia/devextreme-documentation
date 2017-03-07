$(function () {
    $("#barGaugeContainer").dxBarGauge({
        startValue: -50,
        endValue: 50
    });
});

<!--//highlight-->
$(document).ready(function () {
    var cityCodes = [44418, 638242, 2459115, 24553382, 1225448],
        query, urls = [];

    cityCodes.forEach(function (cityCode) {
        query = 'select item.condition.temp from weather.forecast where woeid="' + cityCode + '" and u="c"';
        url = "https://query.yahooapis.com/v1/public/yql?format=json&q=" + escape(query);
        urls.push(url);
    });

    var retrieveData = function () {
        var barGaugeInstance = $('#barGaugeContainer').dxBarGauge('instance');
        var temperatures = [];
            
        for (var i = 0; i < arguments.length; i++) {
            temperatures.push(parseFloat(arguments[i][0].query.results.channel.item.condition.temp));
        };
        barGaugeInstance.values(temperatures);
    };

    $.when($.ajax(urls[0]), $.ajax(urls[1]), $.ajax(urls[2]), $.ajax(urls[3]), $.ajax(urls[4])).then(retrieveData);
});
<!--//highlight-->