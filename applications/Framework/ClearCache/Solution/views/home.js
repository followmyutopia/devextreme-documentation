MyApp.home = function (params, viewInfo) {    
    
    var viewModel = {
        renderedAt: new Date().toTimeString(),
        //highlight
        clearCache: function () {
            var cache = MyApp.app.viewCache;
            cache.removeView(viewInfo.key);
        }
        //highlight
    };    

    return viewModel;
};