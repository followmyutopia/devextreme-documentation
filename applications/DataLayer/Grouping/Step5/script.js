var dataSource = new DevExpress.data.DataSource({
    store: EMPLOYEES,
    group: "Title"
});
dataSource.on("changed", function () {
    render(["FirstName", "LastName", "Title", "Department", "City"], dataSource.items());
});
function groupData(groupingOptions) {
    dataSource.group(groupingOptions);
    dataSource.load();
};
$(function () {
    dataSource.load();
    //highlight
    $("#button1").click(function () {
        groupData({ field: "City" });
    });
    //highlight
});