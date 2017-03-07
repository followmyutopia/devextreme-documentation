<article>
If generated form items do not satisfy your requirements, you can define form items manually or modify options of each generated item before this item is rendered. Manual defining of custom form items is considered in the [Define Items Manually](/Documentation/Guide/UI_Widgets/UI_Widgets_-_Deep_Dive/dxForm/#Define_Items_Manually) section of this article.

To modify generated items, use the [customizeItem](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#customizeItem) option, which accepts a function called for each generated item before this item is rendered. The item configuration object is passed to this function as an argument. The configuration object of each generated item has a **Simple Item** structure. Thus, you can modify the editor options, or change the editor type, modify the item label, specify validation rules, etc. See the [Simple Item](/Documentation/ApiReference/UI_Widgets/dxForm/Simple_Item/) reference article for the full list of simple item configuration options.

    <!--JavaScript-->
    var formOptions = {
        formData: employeeData,
        colCount: 3,
        customizeItem: function(item) {
            item.label = {
                location: "top"
            };
            if (item.dataField === "Email" || item.dataField === "Phone")
                item.colSpan = 3;
            if (item.dataField === "Phone")
                item.helpText = "Example: +1 (111) 111-1111";
        }
    }

<div class="simulator-desktop-container" data-view="Content/Applications/16_1/UIWidgets/dxForm/CustomizeItem/markup.html, Content/Applications/16_1/UIWidgets/dxForm/CustomizeItem/script.js, Content/Applications/16_1/UIWidgets/dxForm/common-styles.css"></div>


You can also modify a form item option at runtime using the [itemOption(field, option, value)](/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#itemOptionfield_option_value) or [itemOption(field, options)](/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#itemOptionfield_options) methods.

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/) 
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/) 

    
</article>