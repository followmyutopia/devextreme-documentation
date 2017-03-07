MyApp.about = function (params) {

    var viewModel = {
        //highlight
        back: function () { MyApp.app.navigate('home', { root: true }) }
        //highlight
    };

    return viewModel;
};