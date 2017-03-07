var dataSource = new DevExpress.data.DataSource({
    store: EMPLOYEES,
    sort: ["FirstName"]
});
dataSource.on("changed", function () {
    render(["FirstName", "LastName", "Title", "Department"], dataSource.items());
});
//highlight
function sortData(sortOptions) {
    dataSource.sort(sortOptions);
    dataSource.load();
}
//highlight
$(function () {
    dataSource.load();
});