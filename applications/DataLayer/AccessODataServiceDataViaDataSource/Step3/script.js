var dataSource = new DevExpress.data.DataSource({
    store: {
        type: "odata",
        url: "https://sampleservices.devexpress.com/Northwind.svc/Products"
    }
});
//highlight
$(function () {
    dataSource.load().done(function (results) {
        render(["ProductName", "UnitsInStock", "UnitPrice"], results);
    });
});
//highlight