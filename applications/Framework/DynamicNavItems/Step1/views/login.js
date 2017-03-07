MyApp.login = function (params) {
    //highlight
    function login() { }

    var viewModel = {
        userName: ko.observable(''),
        password: ko.observable(''),
        login: login
    };
    //highlight
    return viewModel;
};