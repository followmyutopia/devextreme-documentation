===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether the current form item is required.
<!--/shortDescription-->

<!--fullDescription-->
[note]

If you specify validation rules using the [validationRules](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#validationRules) option, the **isRequired** option is ignored. In this case, use the [Require](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/RequiredRule/) validation rule instead. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            // ...
            items: [{
                // ...
                validationRules: [
                    { type: "required" }
                ]
            },
            // ...
            ]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form ... >
        <dxi-item ... >
            <dxi-validation-rule type="required"></dxi-validation-rule>
        </dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule
        ],
        // ...
    })

---

[/note]

#####See Also#####
- [Customize a Simple Item](/Documentation/Guide/Widgets/Form/Configure_Simple_Items/#Customize_a_Simple_Item)
<!--/fullDescription-->