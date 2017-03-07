[note]In this article, the [CheckBox](/Documentation/Guide/Widgets/CheckBox/Overview/) widget is used to change **Form** options. This choice is made for purely demonstrational purposes, and you can do the same operations using another widget following the same guidelines.

To change the [Form configuration](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/) at runtime, use the [option(optionName, optionValue)](/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#optionoptionName_optionValue) method. 

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

#####See Also#####
- [Get and Set Options - jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Get_and_Set_Options/)
- [Change Options - AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Change_Options/)
- [Change Options - Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Change_Options/)
- [Form Demo](https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-form-grouped_fields)
- [Form API Reference](/Documentation/ApiReference/UI_Widgets/dxForm/)

[tags]form, widget options, change option