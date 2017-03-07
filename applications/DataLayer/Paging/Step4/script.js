var dataSource = new DevExpress.data.DataSource({
    store: EMPLOYEES,
    pageSize: 15
});
dataSource.on("changed", function () {
    render(["FirstName", "LastName", "Title", "Department"], dataSource.items());
});
//highlight
function goToPage(index) {
    dataSource.pageIndex(index);
    dataSource.load();
}
//highlight
$(function () {
    dataSource.load();
});