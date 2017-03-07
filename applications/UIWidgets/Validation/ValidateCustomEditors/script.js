var viewModel = {
    contactEmail: ko.observable(""),
    contactPhone: ko.observable(""),
    showRequestContactInfo: ko.observable(false),
    contactMeClick: function (params) {
        var result = params.validationGroup.validate();
        if (result.isValid) {
            DevExpress.ui.notify({
                message: "We will contact you when we have information for you.",
                position: {
                    my: "right top",
                    at: "right top",
                    offset: "-10 10"
                }
            }, "success", 3000);
        }
    },
    getContactPhoneAndEmail: function () {
        return viewModel.contactPhoneAndEmail();
    }
};
viewModel.contactPhoneAndEmail = ko.computed(function () {
    return this.contactEmail() + this.contactPhone();
}, viewModel);
viewModel.applyContactValidation = function (result) {
    viewModel.showRequestContactInfo(!result.isValid);
};
viewModel.contactInfoValidationRequests = $.Callbacks();
viewModel.contactInfoChangedHandler = function () {
    viewModel.contactInfoValidationRequests.fire();
};
viewModel.contactPhoneAndEmail.subscribe(viewModel.contactInfoChangedHandler)
ko.applyBindings(viewModel);