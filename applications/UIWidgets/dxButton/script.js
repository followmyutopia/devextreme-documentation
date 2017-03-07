buttonTypes = ["normal", "default", "back", "danger", "success"];
buttonIcon = ko.observable();
buttonClicked = function ($data) {
    DevExpress.ui.notify("The \"" + $data.model + "\" button clicked.", "success", 1500);
}
iconsDataSource = new DevExpress.data.DataSource({
    store: [],
    paginate: false,
    map: function (item) {
        return item.name;
    }
});
$.get("/Content/data/icons_ext.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        iconsDataSource.store().insert(data[i]);
    }
    iconsDataSource.load();
}, "json");