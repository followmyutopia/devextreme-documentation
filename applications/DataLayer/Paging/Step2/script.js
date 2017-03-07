//highlight
var dataSource = new DevExpress.data.DataSource({
    store: EMPLOYEES,
    pageSize: 15
});
//highlight
$(function () {
    render(["FirstName", "LastName", "Title", "Department"], []);
});