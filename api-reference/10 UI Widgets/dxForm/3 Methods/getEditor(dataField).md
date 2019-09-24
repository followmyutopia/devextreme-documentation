---
id: dxForm.getEditor(dataField)
---
---
##### shortDescription
Gets an editor instance. Takes effect only if the form item is visible.

##### return: Editor | undefined
The editor instance.

##### param(dataField): String
The item's [name](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#name) or [dataField](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#dataField).

---
The following code shows how to get an editor of an item in a group:

    <!--JavaScript-->
    var form = $(function () {
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
            text: "Customize Phone Editor",
            onClick: function (e) {
                var editor = form.getEditor("phone");
                // Customizations go here
            }
        });
    });

[note] This method works only for [predefined editors](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorType), and is unavailable when using a custom [template](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#template).

#####See Also#####
#include common-link-callmethods
- [Change Options at Runtime - Editor Options](/Documentation/Guide/Widgets/Form/Change_Options_at_Runtime/Editor_Options/)
