var dataSource = new DevExpress.data.DataSource({
    load: function (loadOptions) {
        return $.getJSON("/Content/data/suppliers.json");
    }
});
//highlight
$(function () {
    dataSource.load().done(function (results) {
        render(["CompanyName", "Country", "Phone"], results);
    });
});
//highlight