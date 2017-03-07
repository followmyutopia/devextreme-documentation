//highlight
var dataSource = new DevExpress.data.DataSource({
    load: function (loadOptions) {
        return $.getJSON("/Content/data/suppliers.json");
    }
});
//highlight
$(function () {
    render(["CompanyName", "Country", "Phone"]);
});