MyApp.about = function (params) {

    var viewModel = {
        //highlight
        title: "Blog",
        subscribeBlock: MyApp.createSubscribeViewModel("Subscribe to Blog")
        //highlight
    };

    return viewModel;
};