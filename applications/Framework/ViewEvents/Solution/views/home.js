MyApp.home = function (params) {

    function showLog() {
        MyApp.app.navigate("log");
    };

    var viewModel = {
        showLog: showLog
    };

    return viewModel;
};