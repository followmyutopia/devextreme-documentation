var dataSource = new DevExpress.data.DataSource({
    store: EMPLOYEES,
    group: "Title"
});
dataSource.on("changed", function () {
    render(["FirstName", "LastName", "Title", "Department", "City"], dataSource.items());
});
//highlight
function groupData(groupingOptions) {
    dataSource.group(groupingOptions);
    dataSource.load();
};
//highlight
$(function () {
    dataSource.load();
});