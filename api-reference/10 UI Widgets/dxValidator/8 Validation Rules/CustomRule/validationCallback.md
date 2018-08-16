===========================================================================
<!--type-->function(options)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that validates the target value.
<!--/shortDescription-->

<!--fullDescription-->
In the following code, only odd numbers are considered valid:

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#numberBoxContainer").dxNumberBox({
            value: 3
        }).dxValidator({
            validationRules: [{
                type: "custom",
                validationCallback: validationCallback,
                message: "This is an even number. Enter an odd one."
            }]
        });
    });
    function validationCallback (e) {
        return e.value % 2 == 0;
    }


#####Angular

    <!--HTML-->
    <dx-number-box [value]="3">
        <dx-validator>
            <dxi-validation-rule type="custom" 
                [validationCallback]="validationCallback" 
                message="This is an even number. Enter an odd one.">
            </dxi-validation-rule>
        </dx-validator>
    </dx-number-box>

    <!--TypeScript-->
    import { DxNumberBoxModule, DxValidatorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        validationCallback (e) {
            return e.value % 2 == 0;
        }
    }
    @NgModule({
        imports: [
            DxNumberBoxModule,
            DxValidatorModule,
            // ...
        ],
        // ...
    })

---

See [this](/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/#Server-Side_Validation) topic for a server-side validation example.

<!--/fullDescription-->
<!--typeFunctionParamName1-->options<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
An object defining validation parameters.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->value<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->String|Number<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The validated value.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->rule<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->Object<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The current rule object that exposes user-defined options, the **isValid** and **message** fields, and the rule type-specific fields.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->validator<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The [Validator](/Documentation/ApiReference/UI_Widgets/dxValidator) object that initiated the validation.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->data<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The current row data. Exists only when you validate a [DataGrid](/Documentation/ApiReference/UI_Widgets/dxDataGrid) or [TreeList](/Documentation/ApiReference/UI_Widgets/dxTreeList) cell's value.
<!--/typeFunctionParamDescription1_field4-->

<!--typeFunctionReturnType-->Boolean<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A Boolean value that indicates whether the validated value is valid against the checked rule.
<!--/typeFunctionReturnDescription-->