[note]This information is useful for the Knockout approach.

You may want to validate the ViewModel object rather than the UI editors. This will allow you to separate validation logic from the UI, reuse it between multiple views and easily unit-test the implementation.

###Associate ViewModel Members with a Validator###

To validate a ViewModel's observable member, the latter should be associated with the **dxValidator** object. 

![Validated View Model](/Content/images/doc/16_1/Common/ValidatedViewModel.png)

The **dxValidator** object validates the ViewModel's members against a predefined set of rules. To define the rules to be checked, assign an array of rules to the validator's **validationRules** field.

    <!--JavaScript-->dxValidator = {
        validationRules: [{
            type: "required",
            message: "login is required" //optional
        }, {
            type: "pattern",
            pattern: "^[a-zA-Z]+$",
            message: "Do not use digits." //optional
        }]
    };

You can see a full structure of each predefined rule type in the [Validation Rules](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/) Reference section.

Generally, the structure of the **dxValidator** object repeats the structure of the [dxValidator](/Documentation/ApiReference/UI_Widgets/dxValidator/) widget's configuration object.

To associate a ViewModel's observable member with a dxValidatior object, extend this member with an object that has the **dxValidator** field set to the dxValidator object.

    <!--JavaScript-->$(function() {
        var viewModel = {
            login: ko.observable("").extend({
                dxValidator: {
                    validationRules: [{ type: 'required', message: 'Login is required' }]
                }
            }),
            password: ko.observable("").extend({
                dxValidator: {
                    name: "Password",
                    validationRules: [{ type: 'required' }]
                }
            })
        };
        ko.applyBindings(viewModel);
    });

###Validate ViewModel Members###

A ViewModel for its validated members serves as a [validation group](/Documentation/Guide/UI_Widgets/Common/Validation/#Validate_Editor_Values) for validated fields. However, while validation groups are registered for validation automatically, ViewModel objects should be registered manually. For this purpose, use the [DevExpress.validationEngine.registerModelForValidation(model)](/Documentation/ApiReference/Common/Utils/validationEngine/Methods/#registerModelForValidationmodel) method.

#####See Also#####
- [Validate Editor Values](/Documentation/Guide/UI_Widgets/Common/Validation/#Validate_Editor_Values)
- [Validate Editor Values - MVVM Approach](/Documentation/Guide/UI_Widgets/Common/Validation_-_MVVM_Approach/#Validate_Editor_Values)

<!---->

    <!--JavaScript-->var viewModel = {
        //...
    };
    DevExpress.validationEngine.registerModelForValidation(viewModel);
    ko.applyBindings(viewModel);

To validate a registered ViewModel object, call the [DevExpress.validationEngine.validateModel(model)](/Documentation/ApiReference/Common/Utils/validationEngine/Methods/#validateModelmodel) method.

    <!--JavaScript-->var viewModel = {
            //...
            validateAndLogin: function(params) {
                var result = DevExpress.validationEngine.validateModel(this);
                if(result.isValid) {
                    DevExpress.ui.notify({
                        message: "You are logged in as " + this.login(),
                        position: {
                            my: "left top",
                            at: "left top"
                        }
                    }, "success", 3000);
                }
            }
        };
    };
    DevExpress.validationEngine.registerModelForValidation(viewModel);
    ko.applyBindings(viewModel);

###Display Validation Errors###

Since ViewModel fields are related to some editors in a UI, validation errors found in the ViewModel fields should be shown for the related editors. Thus, set the **isValid** and **validationError** configuration options of the target editors to the corresponding fields of the ViewModel's validators.

    <!--HTML--><div data-bind="dxTextBox: { value: login, placeholder: 'Login',
        isValid: login.dxValidator.isValid, validationError: login.dxValidator.validationError }">
    </div>
    <div data-bind="dxTextBox: { value: password, mode: 'password', placeholder: 'Password',
        isValid: password.dxValidator.isValid, validationError: password.dxValidator.validationError }">
    </div>

In addition, you can use the [ValidationSummary](/Documentation/ApiReference/UI_Widgets/dxValidationSummary/) widget to display a summary of validation errors. Add this widget to the view that is bound to the validated ViewModel.

    <!--HTML--><div data-bind="dxValidationSummary: { }"></div>