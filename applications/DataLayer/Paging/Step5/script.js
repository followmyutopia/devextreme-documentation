var dataSource = new DevExpress.data.DataSource({
    store: EMPLOYEES,
    pageSize: 15
});
dataSource.on("changed", function () {
    render(["FirstName", "LastName", "Title", "Department"], dataSource.items());
});
function goToPage(index) {
    dataSource.pageIndex(index);
    dataSource.load();
}
$(function () {
    dataSource.load();
    //highlight
    $("#forward").click(function () {
        goToPage(dataSource.pageIndex() + 1);
    });
    $("#backwards").click(function () {
        goToPage(dataSource.pageIndex() - 1);
    });
    //highlight
});