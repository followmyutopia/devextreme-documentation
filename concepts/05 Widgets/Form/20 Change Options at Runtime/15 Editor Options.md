To change the options of an editor, get its instance first using the [getEditor(field)](/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#getEditorfield) method. After that, call the **option(optionName, optionValue)** or **option(optionName, options)** method of this instance. 

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

        $("#buttonContainer").dxButton({
            text: "Disable the First Name Editor",
            onClick: function () {
                form.getEditor("firstName")
                    .option("disabled", true);
            }
        });
    });

[note]The **getEditor(field)** method is available for visible form items only.

#####See Also#####
- [Call Methods - jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/)
- [Call Methods - AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/)
- [Call Methods - Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/)
- [Form - Change Item Options at Runtime](/Documentation/Guide/Widgets/Form/Change_Options_at_Runtime/Item_Options/)
- [Form - Configure Simple Items](/Documentation/Guide/Widgets/Form/Configure_Simple_Items/)
- [Form Demo](https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-form-grouped_fields)
- [Form API Reference](/Documentation/ApiReference/UI_Widgets/dxForm/)

[tags]form, get editor, change editor options