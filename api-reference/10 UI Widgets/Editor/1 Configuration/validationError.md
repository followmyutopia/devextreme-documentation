<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
Holds the object that defines the error that occurred during validation.
<!--/shortDescription-->

<!--fullDescription-->
In **Knockout** apps, you may need to inform a user about an error that occurred during the validation of a view model field. For this purpose, set the editor's **isValid** option to the **isValid** value of the **dxValidator** that validates this field. To show an error message, set the editor's **validationError** option to the **dxValidator**'s **validationError** value.

    <!--JavaScript-->
    var editorValue = ko.observable("").extend({
        dxValidator: {
            validationRules: [{
                type: 'required',
                message: 'Specify this value'
            }]
        }
    });
    var viewModel = {
        editorOptions: {
            value: editorValue,
            isValid: editorValue.dxValidator.isValid,
            validationError: editorValue.dxValidator.validationError
        }
    };
    
The editor's **isValid** and **validationError** options should also be specified when using a custom validation engine. In this instance, the validation result will be displayed for the editor by the means of the DevExtreme Validation UI. 

#####See Also#####
- [Use a Custom Validation Engine](/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/#Use_a_Custom_Validation_Engine)

<!--/fullDescription-->