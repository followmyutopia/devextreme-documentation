var dataSource = new DevExpress.data.DataSource({
    store: EMPLOYEES,
    sort: ["FirstName"]
});
dataSource.on("changed", function () {
    render(["FirstName", "LastName", "Title", "Department"], dataSource.items());
});
function sortData(sortOptions) {
    dataSource.sort(sortOptions);
    dataSource.load();
}
$(function () {
    dataSource.load();
    //highlight
    $("#button1").click(function () {
        sortData({ field: "LastName", desc: true });
    });
    //highlight
});