showGroups = ko.observable(false);
showByPages = ko.observable(false);

//Executed after showGroups value has been changed
showGroups.subscribe(function (grouped) {
    var myList = $("#myList").dxList("instance");
    myList.beginUpdate();
    if (grouped)
        listDataSource.group(function (dataItem) {
            return dataItem.name.charAt(0);
        });
    else
        listDataSource.group(null);
    myList.option("grouped", grouped);
    listDataSource.load().done(function () {
        myList.endUpdate();
    });
})
showByPages.subscribe(function (pages) {
    var myList = $("#myList").dxList("instance");
    myList.beginUpdate();
    listDataSource.paginate(pages);
    listDataSource.load().done(function () {
        myList.endUpdate();
    });
});

//An object passed to the dataSource configuration option of the list
listDataSource = new DevExpress.data.DataSource({ store: [], paginate: true, pageSize: 10 });

//Loads json data and passes it to the DataSource
$.get("/Content/data/states.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        listDataSource.store().insert(data[i]);
    }
    listDataSource.load();
}, "json");

//Generates the path to the required image file
getImagePath = function (name) {
    if (name === undefined)
        return;
    return "/Content/images/doc/17_2/PhoneJS/flags/" + name.replace(" ", "") + ".gif";
};