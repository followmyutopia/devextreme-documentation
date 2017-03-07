contextMenuTypes = ["context", "slide"];
contextMenuType = ko.observable(contextMenuTypes[0]);
contextMenuItems = [
    {
        text: "Show on the map",
        action: function () {
            DevExpress.ui.notify("\"Show on the map\" action executed", "success", 1500);
        }
    },
    {
        text: "Show info",
        action: function () {
            DevExpress.ui.notify("\"Show info\" action executed", "success", 1500);
        }
    },
    {
        text: "Edit info",
        action: function () {
            DevExpress.ui.notify("\"Edit info\" action executed", "success", 1500);
        }
    }
];
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