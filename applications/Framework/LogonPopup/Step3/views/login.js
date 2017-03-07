MyApp.login = function (params) {

    var viewModel = {
        email: ko.observable(""),
        password: ko.observable(""),
        //highlight
        logIn: function () {
            var email = this.email(),
                password = this.password();

            //Authenticate a user here
            var authenticated = true;

            if (authenticated) {
                MyApp.loggedIn = true;
                MyApp.app.navigate(params.backUri, { target: "current" });
            }
            else {
                //Process unsuccessful attempt here
            }
        },
        close: function () {
            MyApp.app.back();
        }
        //highlight
    };

    return viewModel;
};