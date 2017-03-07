var dataSource = new DevExpress.data.DataSource({
    store: EMPLOYEES,
    filter: ["Title", "Engineer"]
});
//highlight
dataSource.on("changed", function () {
    render(["FirstName", "LastName", "Title", "City", "Department"], dataSource.items());
});
$(function () {
    dataSource.load();
});
//highlight