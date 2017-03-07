MyApp.home = function (params, viewInfo) {
    
    //highlight
    var viewModel = {
        renderedAt: new Date().toTimeString(),
        clearCache: function () {
            var cache = MyApp.app.viewCache;
            cache.removeView(viewInfo.key);
        }
    };
    //highlight

    return viewModel;
};