Not only you can bind the **Form** to an existing data object, but you can also generate a new data object directly from the **Form** items. For this purpose, bind simple items from the [items](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#items) array to not-yet-existing data fields using the [dataField](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#dataField) option. Once a user enters a value into such an item, the corresponding data field is created in the data object. To obtain this data object, get the value of the **formData** option using the [option(optionName)](/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#optionoptionName) method.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            items: [{
                dataField: "firstName",
                editorType: "dxTextBox"
            }, {
                dataField: "lastName",
                editorType: "dxTextBox"
            }, {
                dataField: "birthDate",
                editorType: "dxDateBox"
            }],
            onFieldDataChanged: function(e) {
                var newFormData = e.component.option("formData");
                // ...
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        (onFieldDataChanged)="form_fieldDataChanged($event)">
        <dxi-item dataField="firstName" editorType="dxTextBox"></dxi-item>
        <dxi-item dataField="lastName"  editorType="dxTextBox"></dxi-item>
        <dxi-item dataField="birthDate" editorType="dxDateBox"></dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = { }
        form_fieldDataChanged (e) {
            this.employee = e.component.option("formData");
            // ...
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
- [Form - Configure Simple Items](/Documentation/Guide/Widgets/Form/Configure_Simple_Items/)
- [Form - Validate and Submit the Form](/Documentation/Guide/Widgets/Form/Validate_and_Submit_the_Form/)
- [Form - Update Form Data Using the API](/Documentation/Guide/Widgets/Form/Update_Form_Data_Using_the_API/)
- [Form Demos](/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-form-overview)
- [Form API Reference](/Documentation/ApiReference/UI_Widgets/dxForm/)

[tags]form, generate data, generate data object