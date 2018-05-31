showByPages = ko.observable(false);
showByPages.subscribe(function (pages) {
    var myList = $("#myList").dxList("instance");
    myList.beginUpdate();
    listDataSource.paginate(pages);
    listDataSource.load().done(function () {
        myList.endUpdate();
    });
});

listDataSource = new DevExpress.data.DataSource({ store: [], paginate: showByPages(), pageSize: 10 });

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
    return "/Content/images/doc/18_2/PhoneJS/flags/" + name.replace(" ", "") + ".gif";
};