currentMode = ko.observable("contains");
timeout = ko.observable(0);
minLength = ko.observable(1);
autocompleteDataSource = new DevExpress.data.DataSource([]);
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        autocompleteDataSource.store().insert(data[i]);
    }
    autocompleteDataSource.load();
}, "json");
getImagePath = function (name) {
    if (name !== undefined)
        return "/Content/images/doc/17_2/PhoneJS/flags/" + name.replace(" ", "") + ".gif";
};