To change the [Form configuration](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/) at runtime, call the [option(optionName, optionValue)](/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#optionoptionName_optionValue) method. This approach is more typical of jQuery.

    <!--JavaScript-->
    $(function() {
        var form = $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                phone: "+1(213) 555-9392",
                email: "jheart@dx-email.com"
            }
        }).dxForm("instance");

        $("#checkBoxContainer").dxCheckBox({
            text: 'Disable the Form',
            value: false,
            onValueChanged: function (e) {
                form.option("disabled", e.value);
            }
        });
    });

With Angular, bind the option to change to a component or element property.

    <!--HTML-->
    <dx-form
        [(formData)]="employee"
        [disabled]="disableForm.value">
    </dx-form>
    <dx-check-box #disableForm
        text="Disable the Form"
        [value]="false">
    </dx-check-box>

    <!--TypeScript-->
    import { DxFormModule, DxCheckBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart",
            phone: "+1(213) 555-9392",
            email: "jheart@dx-email.com"
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule,
            DxCheckBoxModule
        ],
        // ...
    })

#####See Also#####
- [Get and Set Options - jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Get_and_Set_Options/)
- **Change Options**: [Angular](/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/#Two-Way_Option_Binding) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Change_Options/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Change_Options/)
- [Form Demos](/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-form-grouped_fields)
- [Form API Reference](/Documentation/ApiReference/UI_Widgets/dxForm/)

[tags]form, widget options, change option