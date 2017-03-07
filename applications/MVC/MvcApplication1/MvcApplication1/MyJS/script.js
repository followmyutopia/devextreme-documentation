var customStore = new DevExpress.data.CustomStore({
    key: 'month',
    load: function (loadOptions) {
        var d = $.Deferred();
        $.getJSON('/Models/weatherData.js').done(function (data) {
            d.resolve(data, { totalCount: data.length });
        });
        return d.promise();
    }
});

var gridDataSourceConfiguration = {
    store: customStore,

};

var chartDataSourceConfiguration = {
    store: customStore,
    postProcess: function(data) {
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
    $("#grid").dxDataGrid({
        dataSource: gridDataSourceConfiguration,
        columns: [
            'month',
            'recordLow',
            'recordHigh'
        ],
        remoteOperations: {
            sorting: false
        },
        selection: {
            mode: 'single'
        },
        selectedRowKeys: ['January'],
        onSelectionChanged: function (selectedItems) {
            if (selectedItems.selectedRowKeys.length) {
                $("#chart2").dxChart("instance").option("dataSource", selectedItems.selectedRowsData[0].temperature);
            }
        }
    });
    $("#chart1").dxChart({
        dataSource: new DevExpress.data.DataSource(chartDataSourceConfiguration),
        seriesTemplate: {
            nameField: 'month',
        },
        commonSeriesSettings: {
            argumentField: 'day',
            valueField: 't',
            type: 'line',
            point: { visible: false }
        },
        argumentAxis: {
            min: 1,
            max: 31,
            minValueMargin: 0,
            maxValueMargin: 0
        },
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center'
        }
    });
    $("#chart2").dxChart({
        dataSource: [],
        series: {
            argumentField: 'day',
            valueField: 't',
            type: 'bar'
        },
        argumentAxis: {
            min: 1,
            max: 31,
            minValueMargin: 0.01,
            maxValueMargin: 0.01
        },
        legend: {
            visible: false
        }
    });
});

