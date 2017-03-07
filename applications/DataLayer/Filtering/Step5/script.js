var dataSource = new DevExpress.data.DataSource({
    store: EMPLOYEES,
    filter: ["Title", "Engineer"]
});
dataSource.on("changed", function () {
    render(["FirstName", "LastName", "Title", "City", "Department"], dataSource.items());
});
function filterData(filteringOptions) {
    dataSource.filter(filteringOptions);
    dataSource.load();
}
$(function () {
    dataSource.load();
    //highlight
    $("#button1").click(function () {
        filterData(["Department", "IT"]);
    });
    //highlight
});