<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Specifies the validation error (reference to broken rule)<!--/d-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->object<!--/type-->
===========================================================================

<!--shortDescription-->
Holds the object that defines the error that occurred during validation.
<!--/shortDescription-->

<!--fullDescription-->
[note]This option can be overwritten while passing either internal validation rules of the widget or external validators. To prevent this, set the **validationError** and the [isValid](/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#isValid) option at the same time. 

In **Knockout approach**, you may need to use an editor to inform end users that an error occurred during the validation of a ViewModel field. In this instance, set the editor's **isValid** option to the **isValid** property value of the **dxValidator** that validated the ViewModel's field. In addition, set the editor's **validationError** option to the **validationError** property value of the **dxValidator** object.

In code, the login specified by an end user is validated on the level of the ViewModel. If validation of the login value fails, a validation message is displayed on the Login editor.

    <!--HTML--><div data-bind="dxTextBox: {
        value: login,
        isValid: login.dxValidator.isValid,
        validationError: login.dxValidator.validationError,
        placeholder: 'Login'
    }"></div>

    <!--JavaScript-->var viewModel = {
        login: ko.observable("").extend({
            dxValidator: {
                validationRules: [{ type: 'required', message: 'Login is required' }]
            }
        }),
        //...
    }

The editor's **validationError** option, as well as the **isValid** option, should also be specified when using a custom validation engine. In this instance, the validation result will be displayed for the editor by means of the DevExtreme Validation UI. For details, refer to the [Use Custom Validation Engine](/Documentation/Guide/Widgets/Common/UI_Widgets/Validation/#Use_Custom_Validation_Engine) topic.
<!--/fullDescription-->

<!--handmade-->
<!--/handmade-->