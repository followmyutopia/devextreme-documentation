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
    $("#button1").click(function () {
        groupData({ field: "City" });
    });
    $("#button2").click(function () {
        groupData({
            field: "Department",
            desc: true
        });
    });
    $("#button3").click(function () {
        groupData({ field: function (itemData) { return itemData.FirstName.charAt(0); }, desc: true });
    });
    $("#clear").click(function () {
        groupData(null);
    });
});