//highlight
//highlight
var dataSource = new DevExpress.data.DataSource({
    load: function(loadOptions) {
        var d = $.Deferred();
        $.getJSON('/Content/data/suppliers.json').done(function (data) {
            d.resolve(data);
        });
        return d.promise();
    }
});
$(document).ajaxSend(function (event, request, settings) {
    settings.timeout = 60000;
});
$(function () {
    dataSource.load().done(function (results) {
        render(["CompanyName", "Country", "Phone"], results);
    });
});