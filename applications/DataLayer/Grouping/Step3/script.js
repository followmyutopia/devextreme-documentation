var dataSource = new DevExpress.data.DataSource({
    store: EMPLOYEES,
    group: "Title"
});
//highlight
dataSource.on("changed", function () {
    render(["FirstName", "LastName", "Title", "Department", "City"], dataSource.items());
});
$(function () {
    dataSource.load();
});
//highlight