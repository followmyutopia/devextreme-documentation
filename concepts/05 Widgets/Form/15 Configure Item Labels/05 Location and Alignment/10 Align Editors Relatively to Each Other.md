By default, the widget aligns all editors of all simple items in straight columns. To disable alignment, assign **false** to:

- [alignItemLabels](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#alignItemLabels) - for all _root_ simple items;
- [alignItemLabelsInAllGroups](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#alignItemLabelsInAllGroups) - for all simple items nested _in all groups_;
- **Group Item** | [alignItemLabels](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/#alignItemLabels) - for simple items nested _in a specific group_;
- **Tabbed Item** | **tabs[]** | [alignItemLabels](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/tabs/#alignItemLabels) - for simple items nested _in a specific tab_.

<!---->

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                hireDate: new Date(2012, 04, 13),
                city: "Los Angeles",
                position: "CEO",
                phone: "+1(213) 555-9392",
                email: "jheart@dx-email.com"
            },
            alignItemLabels: false,
            alignItemLabelsInAllGroups: false,
            items: ["firstName", "lastName", {
                itemType: "group",
                caption: "Contacts",
                items: ["phone", "email"]
            }, {
                itemType: "group",
                caption: "Misc Data",
                items: ["position", "city"]
            }]
        });
    });

#####See Also#####
- [Form - Configure Item Labels | Additional Marks](/Documentation/Guide/Widgets/Form/Configure_Item_Labels/Additional_Marks/)
- [Form - Change Item Options at Runtime](/Documentation/Guide/Widgets/Form/Change_Options_at_Runtime/Item_Options/)
- [Form - Configure Simple Items](/Documentation/Guide/Widgets/Form/Configure_Simple_Items/)
- [Form Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-form-grouped_fields)
- [Form API Reference](/Documentation/ApiReference/UI_Widgets/dxForm/)