---
id: dxForm.itemOption(id, option, value)
---
---
##### shortDescription
Updates the value of a single item option.

##### param(id): String
An item's **name** or a path to it.     
The path may include the group's [name](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/#name) or [caption](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/#caption) or the tab's [title](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/tabs/#title) .

##### param(option): String
The option's name.

##### param(value): any
The new option value.

---
The following code shows how to call this method for an item organized in a group:

    <!--JavaScript-->
    $(function () {
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
                name: "groupName",
                items: ["phone", "email"]
            }]
        }).dxForm("instance");
    });

<!------>

    <!--JavaScript-->
    form.itemOption("groupName.phone", "visible", false);
    // ==== or ====
    form.itemOption("Contacts.phone", "visible", false);


#####See Also#####
#include common-link-callmethods