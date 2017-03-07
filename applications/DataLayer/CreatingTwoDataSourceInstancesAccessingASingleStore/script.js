var store,
    dataSource1,
    dataSource2;

store = new DevExpress.data.ArrayStore({
    data: EMPLOYEES
});
dataSource1 = new DevExpress.data.DataSource({
    store: store,
    filter: ["Title", "contains", "Assistant"],
    sort: "FirstName"
});
dataSource2 = new DevExpress.data.DataSource({
    store: store,
    group: "Department"
});

dataSource1.on("changed", function() {
    render(
        ["FirstName", "LastName", "Title", "Department"],
        dataSource1.items(),
        $("#table1")
    );
});

dataSource2.on("changed", function() {
    render(
        ["FirstName", "LastName", "Title", "Department"],
        dataSource2.items(),
        $("#table2")
    );
});

$(function() {
    dataSource1.load();
    dataSource2.load();
});