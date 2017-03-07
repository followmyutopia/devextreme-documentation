var dataSource = new DevExpress.data.DataSource({
    store: EMPLOYEES,
    pageSize: 15
});
dataSource.on("changed", function () {
    //highlight
    $("#forward").prop("disabled", dataSource.isLastPage());
    $("#backwards").prop("disabled", dataSource.pageIndex() === 0);
    //highlight
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