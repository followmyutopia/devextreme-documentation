//highlight
var dataSource = new DevExpress.data.DataSource({
    store: EMPLOYEES,
    group: "Title"
});
//highlight
$(function () {
    render(["FirstName", "LastName", "Title", "Department", "City"], []);
});