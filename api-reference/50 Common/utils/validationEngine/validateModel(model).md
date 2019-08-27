---
id: validationEngine.validateModel(model)
---
---
##### shortDescription
Validates a view model.

##### return: Object
The [validation result](/Documentation/ApiReference/UI_Widgets/dxValidationGroup/Validation_Result/).

##### param(model): Object
The ViewModel object that has fields extended by the **dxValidator** objects.

---
To specify validation rules for ViewModel fields, extend the latter with the **dxValidator** object.

    <!--JavaScript-->var viewModel = {
        login: ko.observable("").extend({
            dxValidator: {
                validationRules: [{ type: 'required', message: 'We need your credentials' }]
            }
        }),
        //...
    }

To register the rules that are defined within the **dxValidator** objects, call the [DevExpress.validationEngine.registerModelForValidation(model)](/Documentation/ApiReference/Common/utils/validationEngine/#registerModelForValidationmodel) function passing the ViewModel object as a parameter.

    <!--JavaScript-->DevExpress.validationEngine.registerModelForValidation(viewModel);

To validate the rules that are defined within the **dxValidator** objects, call the **DevExpress.validationEngine.validateModel(model)** function passing the ViewModel object as a parameter.

    <!--JavaScript-->DevExpress.validationEngine.registerModelForValidation(viewModel);