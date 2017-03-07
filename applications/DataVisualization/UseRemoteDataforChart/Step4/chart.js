var customStore = new DevExpress.data.CustomStore({
    load: function (loadOptions) {
        var d = $.Deferred();
        $.getJSON('/Content/data/weatherData.js').done(function (data) {
            d.resolve(data);
        });
        return d.promise();
    }
});

var chartDataSourceConfiguration = {
    store: customStore,
    postProcess: function (data) {
        var result = [];
        $.each(data, function () {
            var month = this.month;
            $.each(this.temperature, function () {
                this.month = month;
                result.push(this);
            });
        });
        return result;
    }
};

$(function () {
    $("#chartContainer").dxChart({
        pathModified: true,
        dataSource: new DevExpress.data.DataSource(chartDataSourceConfiguration),
        seriesTemplate: { nameField: 'month' },
        commonSeriesSettings: {
            argumentField: 'day',
            valueField: 't',
            point: { visible: false }
        },
<!--//highlight-->
        argumentAxis: { valueMarginsEnabled: false },
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center'
        }
<!--//highlight-->
    });
});
