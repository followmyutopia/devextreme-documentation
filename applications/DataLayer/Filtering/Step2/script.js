//highlight
var dataSource = new DevExpress.data.DataSource({
    store: EMPLOYEES,
    filter: ["Title", "Engineer"]
});
//highlight
$(function () {
    render(["FirstName", "LastName", "Title", "City", "Department"], []);
});