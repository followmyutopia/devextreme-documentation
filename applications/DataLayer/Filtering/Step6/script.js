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
    $("#button1").click(function() {
        filterData(["Department", "IT"]);
    });
    //highlight
    $("#button2").click(function() {
        filterData([["Title", "Engineer"], "||", ["Title", "Shipping Assistant"]]);
    });
    //highlight
});