MyApp.home = function (params) {

    //highlight
    navigateForward = function () {
        MyApp.app.navigate({
            view: "home",
            item: params.item,
            id: Number(params.id) + 1
        });
    }
    //highlight

    var viewModel = {
        //highlight
        navigateForward: navigateForward,
        title: ko.observable(params.view + " " + params.item + "." + params.id)
        //highlight
    };

    return viewModel;
};