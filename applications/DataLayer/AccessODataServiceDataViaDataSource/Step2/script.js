//highlight
var dataSource = new DevExpress.data.DataSource({
    store: {
        type: "odata",
        url: "https://sampleservices.devexpress.com/Northwind.svc/Products"
    }
});
//highlight
$(function () {
    render(["ProductName", "UnitsInStock", "UnitPrice"]);
});