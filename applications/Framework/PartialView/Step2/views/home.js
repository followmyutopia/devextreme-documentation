MyApp.home = function (params) {

    var viewModel = {
        //highlight
        title: "News",
        subscribeBlock: MyApp.createSubscribeViewModel("Subscribe to News")
        //highlight
    };

    return viewModel;
};