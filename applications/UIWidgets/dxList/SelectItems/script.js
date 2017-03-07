showControls = ko.observable(false);
selectModes = ["none", "multi", "single"];
selectMode = ko.observable("multi");
listDataSource = new DevExpress.data.DataSource({ store: [], paginate: false });
//Loads json data and passes it to the DataSource
$(function () {
    $.get("/Content/data/states.txt", function (data) {
        for (var i = 0; i < data.length; i++) {
            listDataSource.store().insert(data[i]);
        }
        listDataSource.load();
    }, "json");
});
//Generates the path to the required image file
getImagePath = function (name) {
    if (name === undefined)
        return;
    return "/Content/images/doc/16_2/PhoneJS/flags/" + name.replace(" ", "") + ".gif";
};