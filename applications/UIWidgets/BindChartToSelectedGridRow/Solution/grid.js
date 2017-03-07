$(function () {
    var customStore = new DevExpress.data.DataSource({
        key: 'month',
        load: function (loadOptions) {
            var d = $.Deferred();
            $.getJSON('/Content/data/weatherData.js').done(function (data) {
                d.resolve(data);
            });
            return d.promise();
        },
        totalCount: function () {
            var length = 0;
            $.getJSON('/Content/data/weatherData.js').done(function (data) {
                length = data.length;
            });
            return length;
        }
    });

    var grid = $("#gridContainer").dxDataGrid({
        dataSource: customStore,
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
            var t = grid.getSelectedRowsData();
            if (selectedItems.selectedRowKeys.length) {
                chart.option("dataSource", selectedItems.selectedRowsData[0].temperature);
            }
        },
        onContentReady: function () {
            grid.byKey("January").done(function (dataObject) {
                chart.option("dataSource", dataObject.temperature);
            });
        }
    }).dxDataGrid("instance");

    var chart = $("#chartContainer").dxChart({
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
    }).dxChart("instance");
});