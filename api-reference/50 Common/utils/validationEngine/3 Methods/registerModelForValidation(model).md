===================================================================
===================================================================

<!--shortDescription-->
Registers all the [Validator](/Documentation/ApiReference/UI_Widgets/dxValidator/) objects extending fields of the specified ViewModel.
<!--/shortDescription-->

<!--paramName1-->model<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
The ViewModel object has fields extended by the **dxValidator** objects.
<!--/paramDescription1-->

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

To register the rules that are defined within the **dxValidator** objects, call the **DevExpress.validationEngine.registerModelForValidation(model)** function passing the ViewModel object as a parameter.

    <!--JavaScript-->DevExpress.validationEngine.registerModelForValidation(viewModel);

To validate the rules that are defined within the **dxValidator** objects, call the [DevExpress.validationEngine.validateModel(model)](/Documentation/ApiReference/Common/Utils/validationEngine/Methods/#validateModelmodel) function passing the ViewModel object as a parameter.
<!--/fullDescription-->