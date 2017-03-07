<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->true<!--/default-->
<!--type-->boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether the editor's value is valid.
<!--/shortDescription-->

<!--fullDescription-->
In **Knockout approach**, you may need to use an editor to inform end users that an error occurred during the validation of a ViewModel field. In this instance, set the editor's **isValid** option to the **isValid** property value of the **dxValidator** that validated the ViewModel's field. In addition, set the editor's **validationError** option to the **validationError** property value of the **dxValidator** object.

In the code below, the login specified by an end user is validated on the level of the ViewModel. If validation of the login value fails, a validation message is displayed on the Login editor.

    <!--HTML--><div data-bind="dxTextBox: {
        value: login,
        isValid: login.dxValidator.isValid,
        validationError: login.dxValidator.validationError,
        placeholder: 'Login'
    }"></div>

<!--...-->

    <!--JavaScript-->var viewModel = {
        login: ko.observable("").extend({
            dxValidator: {
                validationRules: [{
                    type: 'required',
                    message: 'Login is required'
                }]
            }
        }),
        //...
    }
    
[note]The editor's **isValid** option, as well as the **validationError** option, should also be specified when using a custom validation engine. In this instance, the validation result will be displayed for the editor by the means of the DevExtreme Validation UI. 

#####See Also#####
- [Validate View Model](/Documentation/Guide/Widgets/Common/UI_Widgets/Validation_-_MVVM_Approach/#Validate_View_Model)
- [Use Custom Validation Engine](/Documentation/Guide/Widgets/Common/UI_Widgets/Validation/#Use_Custom_Validation_Engine)
- [Use Custom Validation Engine - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Validation_-_MVVM_Approach/#Use_Custom_Validation_Engine)

<!--/fullDescription-->