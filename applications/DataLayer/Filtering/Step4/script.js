var dataSource = new DevExpress.data.DataSource({
    store: EMPLOYEES,
    filter: ["Title", "Engineer"]
});
dataSource.on("changed", function () {
    render(["FirstName", "LastName", "Title", "City", "Department"], dataSource.items());
});
//highlight
function filterData(filteringOptions) {
    dataSource.filter(filteringOptions);
    dataSource.load();
}
//highlight
$(function () {
    dataSource.load();
});