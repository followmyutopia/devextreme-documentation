//highlight
var dataSource = new DevExpress.data.DataSource({
    store: EMPLOYEES,
    sort: ["FirstName"]
});
//highlight
$(function () {
    render(["FirstName", "LastName", "Title", "Department"], []);
});