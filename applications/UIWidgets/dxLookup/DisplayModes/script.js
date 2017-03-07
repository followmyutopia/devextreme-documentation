popover = ko.observable(false);
fullScreen = ko.observable(false);
lookupData = new DevExpress.data.DataSource([]);

//Loads json data and passes it to the DataSource
$(function () {
    $.get("/Content/data/states.txt", function (data) {
        for (var i = 0; i < data.length; i++) {
            lookupData.store().insert(data[i]);
        }
        lookupData.load();
    }, "json");
});