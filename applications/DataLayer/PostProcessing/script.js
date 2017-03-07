function Model(data) {
    this.Title = data.Title;
    this.FullName = data.FirstName + " " + data.LastName;
    this.Department = data.Department;
}

var dataSource = new DevExpress.data.DataSource({
    store: EMPLOYEES,

    map: function(item) {
        //note: here we are wrap each record in loaded data
        return new Model(item);
    },

    postProcess: function(data) {
        //note: here we are iterate all (already mapped) records and append a count of each Department
        var result = {};
        $.each(data, function() {
            result[this.Department] = (result[this.Department] || 0) + 1;
        });
        $.each(data, function() {
            this.Department = this.Department + " " + "[" + result[this.Department] + "]";
        });
        return data;
    }
});

dataSource.on("changed", function() {
    render(["FullName", "Title", "Department"], dataSource.items());
});

$(function() {
    dataSource.load();
});