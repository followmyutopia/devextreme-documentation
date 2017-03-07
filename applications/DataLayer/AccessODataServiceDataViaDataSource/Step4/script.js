var dataSource = new DevExpress.data.DataSource({
    store: {
        type: "odata",
        url: "https://sampleservices.devexpress.com/Northwind.svc/Products"
    }
});
//highlight
$(document).ajaxSend(function (event, request, settings) {
    settings.timeout = 60000;
});
//highlight
$(function () {
    dataSource.load().done(function (results) {
        render(["ProductName", "UnitsInStock", "UnitPrice"], results);
    });
});