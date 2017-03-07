MyApp.home = function (params) {

    navigateForward = function () {
        MyApp.app.navigate("about");
    }

    var viewModel = {
        navigateForward: navigateForward
    };

    return viewModel;
};