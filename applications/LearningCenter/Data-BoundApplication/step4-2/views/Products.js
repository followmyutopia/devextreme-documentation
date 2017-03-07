MyApp.products = function (params) {
    var viewModel = {
        searchString: ko.observable(''),
        find: function () {
            viewModel.showSearch(!viewModel.showSearch());
            viewModel.searchString('');
        },
        showSearch: ko.observable(false),
        dataSource: new DevExpress.data.DataSource({
            store: MyApp.db.Products,
            map: function (item) {
                return new MyApp.ProductViewModel(item);
            },
            pageSize: 10,
            filter: ['CategoryID', '=', parseInt(params.id)],
            searchExpr: "ProductName"
        })
    };
 
    ko.computed(function () {
        return viewModel.searchString();
    }).extend({
        throttle: 500
    }).subscribe(function () {
        viewModel.dataSource.searchValue(viewModel.searchString());
        viewModel.dataSource.pageIndex(0);
        viewModel.dataSource.load();
    });        
 
    return viewModel;
};