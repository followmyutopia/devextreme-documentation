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
    $("#button1").click(function () {
        sortData({ field: "LastName", desc: true });
    });
    $("#button2").click(function () {
        sortData(["Department", { field: "Title", desc: true }]);
    });
    //highlight
    $("#button3").click(function () {
        sortData({ field: function (itemData) { return itemData.FirstName.length; }, desc: true });
    });
    //highlight
});