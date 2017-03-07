var dataSource = new DevExpress.data.DataSource({
    store: EMPLOYEES,
    searchExpr: ["FirstName", "LastName"]
});
//highlight
dataSource.on("changed", function() {
    render(["FirstName", "LastName", "Title", "Department"], dataSource.items());
});
$(function () {
    dataSource.load();
});
//highlight