MyApp.product_details = function (params) {
    var viewModel = {
        product: new MyApp.ProductViewModel(),
        viewShown: function () {
            MyApp.db.Products.byKey(params.id).done(function(data) {
                viewModel.product.fromJS(data);
            });
        }
    };
    return viewModel;
};