//An object passed to the dataSource configuration option of the lookup
lookupDataSource = new DevExpress.data.DataSource([]);

//Loads json data and passes it to the DataSource
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        lookupDataSource.store().insert(data[i]);
    }
    lookupDataSource.load();
}, "json");

//Generates the path to the required image file
getImagePath = function (name) {
    if (name === undefined)
        return;
    return "/Content/images/doc/18_1/PhoneJS/flags/" + name.replace(" ", "") + ".gif";
};