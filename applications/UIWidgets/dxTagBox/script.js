capitals = ko.observableArray([]);
//An object passed to the dataSource configuration option of the list
tagBoxData = new DevExpress.data.DataSource({ store: [], paginate: false });

//Loads json data and passes it to the DataSource
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        tagBoxData.store().insert(data[i]);
    }
    tagBoxData.load();
}, "json");

