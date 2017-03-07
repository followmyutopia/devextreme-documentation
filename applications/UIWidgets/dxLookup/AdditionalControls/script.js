showCancelButton = ko.observable(true);
showClearButton = ko.observable(true);
cancelButtonText = ko.observable("Cancel");
clearButtonText = ko.observable("Clear");

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