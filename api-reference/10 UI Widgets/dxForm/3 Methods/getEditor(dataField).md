<!--id-->dxForm.getEditor(dataField)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Gets an editor instance. Takes effect only if the form item is visible.
<!--/shortDescription-->

<!--paramName1-->dataField<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
The item's [name](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#name) or [dataField](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#dataField).
<!--/paramDescription1-->

<!--returnType-->Editor|undefined<!--/returnType-->
<!--returnDescription-->
The editor instance.
<!--/returnDescription-->

<!--fullDescription-->
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

#####See Also#####
#include common-link-callmethods
- [Change Options at Runtime - Editor Options](/Documentation/Guide/Widgets/Form/Change_Options_at_Runtime/Editor_Options/)
<!--/fullDescription-->