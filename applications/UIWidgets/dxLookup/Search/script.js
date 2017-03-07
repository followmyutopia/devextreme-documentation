searchEnabled = ko.observable(true);
searchPlaceholder = ko.observable("Type here");
searchTimeout = ko.observable(500);
minSearchLength = ko.observable(1);
disableWidgets = ko.observable(!searchEnabled());

searchEnabled.subscribe(function (newValue) {
    disableWidgets(!newValue);
});

//An object passed to the dataSource configuration option of the lookup
lookupData = new DevExpress.data.DataSource([]);

//Loads json data and passes it to the DataSource
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        lookupData.store().insert(data[i]);
    }
    lookupData.load();
}, "json");