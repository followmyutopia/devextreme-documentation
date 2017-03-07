The **Form** widget allows you to place custom content, for example, an image, under the group caption.

    <!--JavaScript-->
    $("#formContainer").dxForm({
        formData: {
            firstName: "John",
            lastName: "Heart"
        },
        colCount: 2,
        items: [{
            itemType: "group",
            caption: "Picture",
            template: function (data, itemElement) {
                itemElement.append("<img src='http://here/goes/the/picture.jpg'>");
            }
        }, {
            itemType: "group",
            caption: "Personal Data",
            items: ["firstName", "lastName"]
        }]
    });

#####See Also#####
- [Form - Configure Simple Items](/Documentation/Guide/Widgets/Form/Configure_Simple_Items/)
- [Form - Organize Simple Items in Tabs](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Tabs/)
- [Form - Organize Simple Items in Columns](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Columns/)
- [Form - Add an Empty Space Between Simple Items](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/Add_an_Empty_Space/)
- [Form API Reference](/Documentation/ApiReference/UI_Widgets/dxForm/)