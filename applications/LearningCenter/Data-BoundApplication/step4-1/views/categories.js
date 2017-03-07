MyApp.categories = function (params) {
    var viewModel = {
        dataSource: new DevExpress.data.DataSource({
            store: MyApp.db.Categories,
            map: function(item) {
                return new MyApp.CategoryViewModel(item);
            }
        })
    };
    return viewModel;
};