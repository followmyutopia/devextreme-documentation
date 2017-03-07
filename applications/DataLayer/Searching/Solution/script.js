var dataSource = new DevExpress.data.DataSource({
    store: EMPLOYEES,
    searchExpr: ["FirstName", "LastName"]
});
dataSource.on("changed", function () {
    render(["FirstName", "LastName", "Title", "Department"], dataSource.items());
});
$(function () {
    dataSource.load();
    $("#search-value").keyup(function () {
        dataSource.searchValue($(this).val());
        dataSource.load();
    });
});