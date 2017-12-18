===================================================================
===================================================================

<!--shortDescription-->
Gets an editor instance. Takes effect only if the form item is visible.
<!--/shortDescription-->

<!--paramName1-->field<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
A simple form item's [name](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#name) or a path to it.           
The path may include the group's caption or tab's title.
<!--/paramDescription1-->

<!--returnType-->any<!--/returnType-->
<!--returnDescription-->
The editor instance.
<!--/returnDescription-->

<!--fullDescription-->
The following code shows how to get an editor of an item in a group:

    <!--JavaScript-->
    $(function () {
        $("#formContainer").dxForm({
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
            text: 'Customize Phone Editor',
            onClick: function (e) {
                var editor = form.getEditor(Contacts.phone);
                // Customizations go here
            }
        });
    });

#####See Also#####
#include common-link-callmethods
- [Change Options at Runtime - Editor Options](/Documentation/Guide/Widgets/Form/Change_Options_at_Runtime/Editor_Options/)
<!--/fullDescription-->