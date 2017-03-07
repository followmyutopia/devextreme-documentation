var dataSource = new DevExpress.data.DataSource({
    load: function (loadOptions) {
        return $.getJSON("/Content/data/suppliers.json");
    }
});
//highlight
$(document).ajaxSend(function (event, request, settings) {
    settings.timeout = 60000;
});
//highlight
$(function () {
    dataSource.load().done(function (results) {
        render(["CompanyName", "Country", "Phone"], results);
    });
});
