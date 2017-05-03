The **Form** widget represents fields of a data object as a collection of label-editor pairs. These pairs can be arranged in several groups, tabs and columns.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-form-overview" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The following code adds the **Form** widget to your page. The simplest configuration of this widget includes only a data object. 

    <!--HTML-->
    <div id="formContainer"></div>

<!---->

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                position: "CEO",
                officeNo: 901,
                birthDate: new Date(1964, 03, 15),
                hireDate: new Date(2012, 04, 13),
                city: "Los Angeles",
                phone: "+1(213) 555-9392",
                email: "jheart@dx-email.com"
            }
        });
    });

The configuration above creates one label-editor pair per each field of the data object. Such a pair is called ["simple item"](/Documentation/Guide/Widgets/Form/Configure_Simple_Items/). Simple items can be organized in [groups](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Groups/), [tabs](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Tabs/) and [columns](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Columns/).

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [Form - Configure Simple Items](/Documentation/Guide/Widgets/Form/Configure_Simple_Items/)
- [Form - Organize Simple Items](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Groups/)
- [Form - Configure Item Labels](/Documentation/Guide/Widgets/Form/Configure_Item_Labels/Location_and_Alignment/)
- [Form - Change Options at Runtime](/Documentation/Guide/Widgets/Form/Change_Options_at_Runtime/)
- [Form - Handle the Value Change Event](/Documentation/Guide/Widgets/Form/Handle_the_Value_Change_Event/)
- [Form - Update Form Data Using the API](/Documentation/Guide/Widgets/Form/Update_Form_Data_Using_the_API/)
- [Form - Generate a Data Object from Form Items](/Documentation/Guide/Widgets/Form/Generate_a_Data_Object_from_Form_Items/)
- [Form - Validate and Submit the Form](/Documentation/Guide/Widgets/Form/Validate_and_Submit_the_Form/)
- [Form API Reference](/Documentation/ApiReference/UI_Widgets/dxForm/)

[tags]form, overview, form data