var viewModel = {
    login: ko.observable(""),
    password: ko.observable(""),
    register: function (params) {
        var result = params.validationGroup.validate();
        if (result.isValid) {
            DevExpress.ui.notify({
                message: "You are logged in as " + this.login(),
                position: {
                    my: "left top",
                    at: "left top"
                }
            }, "success", 3000);
        }
    },
    loginRemoteCheckTimeout: ko.observable(),
    checkLoginAvailable: function (params) {
        if (viewModel.loginRemoteCheckTimeout()) {
            clearTimeout(viewModel.loginRemoteCheckTimeout());
        }
        var timeoutId = setTimeout(function () {
            viewModel.loginRemoteCheckTimeout(null);
            //just came back from a server...
            if (params.value === "Alex") {
                params.rule.message = "User name " + params.value + " is already used. Please choose another one.";
                params.rule.isValid = false;
                params.validator.validate();
            }
        }, 1000);
        viewModel.loginRemoteCheckTimeout(timeoutId);
        return true;
    }
}
ko.applyBindings(viewModel);