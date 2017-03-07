MyApp.home = function (params) {

    //highlight
    function showLog() {
        MyApp.app.navigate("log");
    };
    //highlight

    var viewModel = {
        //highlight
        showLog: showLog
        //highlight
    };

    return viewModel;
};