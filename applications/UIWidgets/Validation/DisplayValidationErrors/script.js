var viewModel = {
    login: ko.observable(""),
    password: ko.observable(""),
    validateAndSubmit: function (params) {
        var result = params.validationGroup.validate();
        if (result.isValid) {
            DevExpress.ui.notify({
                message: "You are registered",
                position: {
                    my: "left top",
                    at: "left top",
                    offset: 15
                }
            }, "success", 3000);
        }
    }
};
ko.applyBindings(viewModel);