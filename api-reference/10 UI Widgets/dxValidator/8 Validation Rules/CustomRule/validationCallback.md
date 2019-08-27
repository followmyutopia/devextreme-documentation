---
id: CustomRule.validationCallback
type: function(options)
---
---
##### shortDescription
A function that validates the target value.

##### param(options): Object
An object defining validation parameters.

##### field(options.data): Object
The current row data. Exists only when you validate a [DataGrid](/Documentation/ApiReference/UI_Widgets/dxDataGrid) or [TreeList](/Documentation/ApiReference/UI_Widgets/dxTreeList) cell's value.

##### field(options.rule): Object
The current rule object that exposes user-defined options, the **isValid** and **message** fields, and the rule type-specific fields.

##### field(options.validator): Object
The [Validator](/Documentation/ApiReference/UI_Widgets/dxValidator) object that initiated the validation.

##### field(options.value): String | Number
The validated value.

##### return: Boolean
A Boolean value that indicates whether the validated value is valid against the checked rule.

---
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