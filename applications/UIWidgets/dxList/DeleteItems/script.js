deleteTypes = ['static', 'toggle', 'slideButton', 'slideItem', 'swipe', 'context'];
deleteType = ko.observable(deleteTypes[0]);
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
    return "/Content/images/doc/17_2/PhoneJS/flags/" + name.replace(" ", "") + ".gif";
};