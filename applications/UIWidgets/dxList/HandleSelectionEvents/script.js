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
selectionChangedHandler = function (eventArgs) {
    if (eventArgs.addedItems.length > 0)
        DevExpress.ui.notify("The \"" + eventArgs.addedItems[0].name + "\" item is selected", "success", 1500);
    if (eventArgs.removedItems.length > 0)
        DevExpress.ui.notify("The \"" + eventArgs.removedItems[0].name + "\" item is unselected", "error", 1500);
}