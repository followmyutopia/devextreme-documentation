MyApp.login = function (params) {
    //highlight
    function login() {
        if (true /*check credentials here*/) {
            var navigation = MyApp.app.navigation;

            navigation[0].option("visible", false);
            navigation[2].option("visible", true);
            navigation[3].option("visible", true);

            MyApp.app.navigate("home", { root: true });
        }
    }
    //highlight

    var viewModel = {
        userName: ko.observable(''),
        password: ko.observable(''),
        login: login
    };

    return viewModel;
};