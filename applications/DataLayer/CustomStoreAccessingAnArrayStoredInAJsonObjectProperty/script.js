var db = {
    employees: EMPLOYEES.slice(0, 10), //note: we don't want to load all data
    getEmployeesAsync: function() {
        //here we're emulate an async request to server
        var d = $.Deferred(),
            data = EMPLOYEES.slice(10, 20); //note: we don't want to load all data
        setTimeout(function() {
            d.resolve(data);
        }, 1000);

        return d.promise();
    }
};

var store1 = new DevExpress.data.CustomStore({
    load: function(options) {
        return db.employees;
    }
});
var dataSource1 = new DevExpress.data.DataSource(store1);
var dataSource2 = new DevExpress.data.DataSource({
    load: db.getEmployeesAsync
});

$(function() {
    dataSource1.load()
        .done(function(results) {
            render(["FirstName", "LastName", "Title", "Department"], results, $("#table1"));
        });
    dataSource2.load()
        .done(function(results) {
            render(["FirstName", "LastName", "Title", "Department"], results, $("#table2"));
        });
});