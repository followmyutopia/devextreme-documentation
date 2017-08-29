<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Validates the rules that are defined within the **dxValidator** objects that are registered for the specified ViewModel.
<!--/shortDescription-->

<!--paramName1-->model<!--/paramName1-->
<!--paramType1-->object<!--/paramType1-->
<!--paramDescription1-->
The ViewModel object that has fields extended by the **dxValidator** objects.
<!--/paramDescription1-->

<!--returnType-->Object<!--/returnType-->
<!--returnDescription-->
An object defining the result of validating the specified ViewModel.
<!--/returnDescription-->

<!--fullDescription-->
To specify validation rules for ViewModel fields, extend the latter with the **dxValidator** object.

    <!--JavaScript-->var viewModel = {
        login: ko.observable("").extend({
            dxValidator: {
                validationRules: [{ type: 'required', message: 'We need your credentials' }]
            }
        }),
        //...
    }

To register the rules that are defined within the **dxValidator** objects, call the [DevExpress.validationEngine.registerModelForValidation(model)](/Documentation/ApiReference/Common/Utils/validationEngine/Methods/#registerModelForValidationmodel) function passing the ViewModel object as a parameter.

    <!--JavaScript-->DevExpress.validationEngine.registerModelForValidation(viewModel);

To validate the rules that are defined within the **dxValidator** objects, call the **DevExpress.validationEngine.validateModel(model)** function passing the ViewModel object as a parameter.

    <!--JavaScript-->DevExpress.validationEngine.registerModelForValidation(viewModel);

The object returned by this function has the following structure.

- **isValid**  
    Indicates whether all the rules checked for the specified ViewModel are satisfied.
- **brokenRules**  
    An array of broken rules. The structure of rule objects is described in the [validation Rules](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/) section.
- **validators**  
    An array of **Validator** widgets that are included to the validated ViewModel.
<!--/fullDescription-->