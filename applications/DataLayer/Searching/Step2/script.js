//highlight
var dataSource = new DevExpress.data.DataSource({
    store: EMPLOYEES,
    searchExpr: ["FirstName", "LastName"]
});
//highlight
$(function () {
    render(["FirstName", "LastName", "Title", "Department"], []);
});