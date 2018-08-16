To process a new form item value, you need to handle the [fieldDataChanged](/Documentation/ApiReference/UI_Widgets/dxForm/Events/#fieldDataChanged) event. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onFieldDataChanged](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#onFieldDataChanged) option when you configure the widget.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            onFieldDataChanged: function (e) {
                var updatedField = e.dataField;
                var newValue = e.value;
                // Event handling commands go here
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-form ...
        (onFieldDataChanged)="form_fieldDataChanged($event)">
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
        form_fieldDataChanged (e) {
            let updatedField = e.dataField;
            let newValue = e.value;
            // Event handling commands go here
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

If you are going to change event handlers at runtime, or if you need to attach several handlers to the **fieldDataChanged** event, subscribe to this event using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var fieldDataChangedHandler1 = function (e) {
        var updatedField = e.dataField;
        var newValue = e.value;
        // First handler of the "fieldDataChanged" event
    };

    var fieldDataChangedHandler2 = function (e) {
        var updatedField = e.dataField;
        var newValue = e.value;
        // Second handler of the "fieldDataChanged" event
    };

    $("#formContainer").dxForm("instance")
        .on('fieldDataChanged', fieldDataChangedHandler1)
        .on('fieldDataChanged', fieldDataChangedHandler2);

#####See Also#####
#include common-link-handleevents
- [Form - Update Form Data Using the API](/Documentation/Guide/Widgets/Form/Update_Form_Data_Using_the_API/)
- [Form - Generate a Data Object from Form Items](/Documentation/Guide/Widgets/Form/Generate_a_Data_Object_from_Form_Items/)
- [Form - Validate and Submit the Form](/Documentation/Guide/Widgets/Form/Validate_and_Submit_the_Form/)
- [Form Demos](/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-form-overview)
- [Form API Reference](/Documentation/ApiReference/UI_Widgets/dxForm/)

[tags]form, value change, get value, field data changed, fieldDataChanged