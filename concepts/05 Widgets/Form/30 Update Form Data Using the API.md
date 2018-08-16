If you need to update form data at runtime, redefine the [formData](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#formData) object. In this case, form item values are updated automatically and the widget is rerendered from scratch. In the following example, the [SelectBox](/Documentation/Guide/Widgets/SelectBox/Overview/) widget changes the **formData** object.

    <!--JavaScript-->
    var employees = [{
        name: "John Heart",
        position: "CEO",
        officeNo: "901"
    }, {
        name: "Bill Silver",
        position: "HR Manager",
        officeNo: "905"
    }];

    $(function() {
        var form = $("#formContainer").dxForm({
            formData: employees[0]
        }).dxForm("instance");

        $("#employeeSelector").dxSelectBox({
            displayExpr: "name",
            dataSource: employees,
            value: employees[0],
            onValueChanged: function(data) {
                form.option("formData", data.value);
            }
        });
    });

The **Form** widget provides methods that update specific **formData** fields and rerender the corresponding editors without rerendering the whole widget. The [updateData(dataField, value)](/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#updateDatadataField_value) method updates the value of a single field. The [updateData(data)](/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#updateDatadata) method updates values of several fields at once. In the following code, these methods are called on a [Button](/Documentation/Guide/Widgets/Button/Overview/) click.

    <!--JavaScript-->
    $(function() {
        var form = $("#formContainer").dxForm({
            formData: {
                firstName: "Joe",
                lastName: "Heart",
                phone: "+1(213) 555-9392"
            }
        }).dxForm("instance");

        $("#updatePhone").dxButton({
            text: 'Update the Phone Number',
            onClick: function () {
                form.updateData("phone", "+1(333) 888-7698");
            }
        });

        $("#updateName").dxButton({
            text: 'Update the Name',
            onClick: function () {
                form.updateData({
                    firstName: "John",
                    lastName: "Doe"
                });
            }
        });
    });

With Angular, two-way binding to a component property is sufficient to update [formData](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#formData) at runtime. Swapping the whole **formData** object rerenders the widget from scratch; updating specific **formData** fields rerenders only the corresponding editors.

    <!--HTML-->
    <dx-form [(formData)]="employee"></dx-form>
    <dx-button
        text="Update the Phone Number"
        (onClick)="employee.phone = '+1(333) 888-7698'">
    </dx-button>

    <!--TypeScript-->
    import { DxFormModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        employee = {
            firstName: "Joe",
            lastName: "Heart",
            phone: "+1(213) 555-9392"
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule,
            DxButtonModule
        ],
        // ...
    })

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-form-overview/"
}

#####See Also#####
- [Form - Handle the Value Change Event](/Documentation/Guide/Widgets/Form/Handle_the_Value_Change_Event/)
- [Form - Generate a Data Object from Form Items](/Documentation/Guide/Widgets/Form/Generate_a_Data_Object_from_Form_Items/)
- [Form - Validate and Submit the Form](/Documentation/Guide/Widgets/Form/Validate_and_Submit_the_Form/)
- [Form Demos](/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-form-overview)
- [Form API Reference](/Documentation/ApiReference/UI_Widgets/dxForm/)

[tags]form, form data, formData, change form data, update data, update form data