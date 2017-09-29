[Simple items](/Documentation/Guide/Widgets/Form/Configure_Simple_Items/) may require a value or may allow a user to skip it. Both types of items can be marked with a symbol or text. Required items are those whose [isRequired](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#isRequired) option is **true**, others are considered optional.

To specify the mark or text for required and optional items, use the [requiredMark](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#requiredMark) and [optionalMark](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#optionalMark) options. Note that the "optional" mark will not be displayed until you set the [showOptionalMark](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#showOptionalMark) option to **true**. You can also hide the "required" mark using the [showRequiredMark](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#showRequiredMark) option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                position: "CEO"
            },
            items: [
                { dataField: "firstName", isRequired: true },
                { dataField: "lastName", isRequired: true },
                "position"
            ],
            requiredMark: "!",
            optionalMark: "opt",
            showOptionalMark: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee"
        requiredMark="!"
        optionalMark="opt"
        [showOptionalMark]="true">
        <dxi-item dataField="firstName" [isRequired]="true"></dxi-item>
        <dxi-item dataField="lastName"  [isRequired]="true"></dxi-item>
        <dxi-item dataField="position"></dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart",
            position: "CEO"
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule
        ],
        // ...
    })

---

Each label ends with a colon. To hide it, assign **false** to the [showColonAfterLabel](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#showColonAfterLabel) option. Note that you can show/hide a colon for an individual item using the **label**.[showColon](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/label/#showColon) option.

---
##### jQuery

    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                position: "CEO"
            },
            showColonAfterLabel: false,
            items: ["firstName", "lastName", {
                dataField: "position",
                label: { showColon: true }
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee"
        [showColonAfterLabel]="false">
        <dxi-item dataField="firstName"></dxi-item>
        <dxi-item dataField="lastName"></dxi-item>
        <dxi-item dataField="position">
            <dxo-label [showColon]="true"></dxo-label>
        </dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart",
            position: "CEO"
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule
        ],
        // ...
    })

---

#####See Also#####
- [Form - Configure Item Labels | Location and Alignment](/Documentation/Guide/Widgets/Form/Configure_Item_Labels/Location_and_Alignment/)
- [Form - Change Item Options at Runtime](/Documentation/Guide/Widgets/Form/Change_Options_at_Runtime/Item_Options/)
- [Form - Change Editor Options at Runtime](/Documentation/Guide/Widgets/Form/Change_Options_at_Runtime/Editor_Options/)
- [Form - Configure Simple Items](/Documentation/Guide/Widgets/Form/Configure_Simple_Items/)
- [Form Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-form-grouped_fields)
- [Form API Reference](/Documentation/ApiReference/UI_Widgets/dxForm/)

[tags]form, required, optional, mark, colon