[note]In this article, the [Button](/Documentation/Guide/Widgets/Button/Overview/) widget is used to change item options. This choice is made for purely demonstrational purposes, and you can do the same operations using another widget following the same guidelines.

To change a single item option at runtime, call the [itemOption(field, option, value)](/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#itemOptionfield_option_value) method. If the needed item is [in a group](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Groups/) or [in a tab](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Tabs/), the *field* parameter should be given the group caption or tab title followed by the item's name. An example is shown below.

    <!--JavaScript-->
    $(function() {
        var form = $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                phone: "+1(213) 555-9392",
                email: "jheart@dx-email.com"
            },
            items: ["firstName", "lastName", {
                itemType: "group",
                caption: "Contacts",
                items: ["phone", "email"]
            }]
        }).dxForm("instance");

        $("#buttonContainer").dxButton({
            text: 'Hide the Phone Number',
            onClick: function () {
                form.itemOption("Contacts.phone", "visible", false);
            }
        });
    });

To change several options at a time, pass an object to the [itemOption(field, options)](/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#itemOptionfield_options) method.
Being called with the *field* parameter only, this method returns the current configuration of the specified form item.

    <!--JavaScript-->
    $(function() {
        // ...
        $("#buttonContainer").dxButton({
            text: 'Change the Phone Options',
            onClick: function () {
                form.itemOption("Contacts.phone", {
                    isRequired: true, 
                    helpText: "+1(111)111-1111" 
                });
            }
        });
    });

#####See Also#####
- [Call Methods - jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/)
- [Call Methods - AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/)
- [Call Methods - Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/)
- [Form - Change Editor Options at Runtime](/Documentation/Guide/Widgets/Form/Change_Options_at_Runtime/Editor_Options/)
- [Form - Configure Simple Items](/Documentation/Guide/Widgets/Form/Configure_Simple_Items/)
- [Form Demo](https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-form-grouped_fields)
- [Form API Reference](/Documentation/ApiReference/UI_Widgets/dxForm/)

[tags]form, modify item, item option, change option