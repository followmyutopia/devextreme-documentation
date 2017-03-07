var dataSource = new DevExpress.data.DataSource({
    store: EMPLOYEES,
    pageSize: 10
});
dataSource.on("changed", function () {
    $("#forward").prop("disabled", dataSource.isLastPage());
    $("#backwards").prop("disabled", dataSource.pageIndex() === 0);
    $("#index").text(dataSource.pageIndex() + 1);
    render(["FirstName", "LastName", "Title", "Department"], dataSource.items());
});
function goToPage(index) {
    dataSource.pageIndex(index);
    dataSource.load();
}
$(function () {
    dataSource.load();
    $("#forward").click(function () {
        goToPage(dataSource.pageIndex() + 1);
    });
    $("#backwards").click(function () {
        goToPage(dataSource.pageIndex() - 1);
    });
});