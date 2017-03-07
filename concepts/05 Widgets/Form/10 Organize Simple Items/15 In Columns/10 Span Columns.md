If an item should span more than one column, assign the required number to the [colSpan](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#colSpan) option. Groups and tabs can also have individual **colSpan** values. 

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                notes: "John has been in the Audio/Video industry since 1990.",
                phone: "+1(213) 555-9392",
                email: "jheart@dx-email.com"
            },
            colCount: 2,
            items: ["firstName", "lastName", {
                dataField: "notes",
                colSpan: 2
            }, {
                itemType: "tabbed",
                colSpan: 2,
                tabs: [{
                    title: "Contacts",
                    items: ["phone", "email"]
                }]
            }]
        });
    });