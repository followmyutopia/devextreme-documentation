MyApp.home = function (params) {
    //highlight
    navigateForward = function () {
        MyApp.app.navigate("about");
    }
    //highlight
    var viewModel = {
        //highlight
        navigateForward: navigateForward
        //highlight
    };

    return viewModel;
};