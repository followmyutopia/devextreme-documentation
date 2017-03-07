//highlight
var customStore = new DevExpress.data.CustomStore({
    load: function (loadOptions) {
        var d = $.Deferred();
        $.getJSON('/Content/data/weatherData.js').done(function (data) {
            d.resolve(data, { totalCount: data.length });
        });
        return d.promise();
    }
});
//highlight

$(function () {
    $("#gridContainer").dxDataGrid({
        //highlight
        dataSource: {
            store: customStore
        }
        //highlight
    });
});
//highlight