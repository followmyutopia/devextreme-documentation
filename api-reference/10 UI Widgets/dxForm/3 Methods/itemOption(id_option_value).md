===================================================================
===================================================================

<!--shortDescription-->
Updates the value of a single item option.
<!--/shortDescription-->

<!--paramName1-->id<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
An item's **name** or a path to it.     
The path may include the group's caption or the tab's title.
<!--/paramDescription1-->

<!--paramName2-->option<!--/paramName2-->
<!--paramType2-->String<!--/paramType2-->
<!--paramDescription2-->
The option's name.
<!--/paramDescription2-->

<!--paramName3-->value<!--/paramName3-->
<!--paramType3-->any<!--/paramType3-->
<!--paramDescription3-->
The new option value.
<!--/paramDescription3-->

<!--fullDescription-->
The following code shows how to call this method for an item organized in a group:

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
    });

<!------>

    <!--JavaScript-->
    form.itemOption("Contacts.phone", "visible", false)


#####See Also#####
#include common-link-callmethods
<!--/fullDescription-->