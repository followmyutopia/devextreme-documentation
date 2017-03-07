var customStore = new DevExpress.data.CustomStore({
    load: function (loadOptions) {
        var d = $.Deferred();
        $.getJSON('/Content/data/weatherData.js').done(function (data) {
            d.resolve(data, { totalCount: data.length });
        });
        return d.promise();
    }
});

$(function () {
    $("#gridContainer").dxDataGrid({
        //highlight
        dataSource: {
            store: customStore
        },
        //highlight
        columns: [
            'month',
            'recordLow',
            'recordHigh'
        ],
        remoteOperations: {
            sorting: false
        }
    });
});
