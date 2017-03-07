<article data-show="Content/Applications/16_1/UIWidgets/dxLookup/DisplayModes/markup.html,
        Content/Applications/16_1/UIWidgets/dxLookup/DisplayModes/script.js,
        Content/Applications/16_1/UIWidgets/dxLookup/DisplayModes/styles.css">

The **Lookup** widget can display the popup window as a standard overlay window (by default) or a popover pointing at the lookup input element. To display the popup window as a popover, set the [usePopover](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#usePopover) option to *true*. The popover mode is available if the [full-screen mode](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#Common_Tasks/Display_Modes) is disabled.

    <!--JavaScript-->
    var lookupOptions = {
        dataSource: lookupData,
        fullScreen: false,
        usePopover: true
    }

The widget enables you to specify the title text for the popup window using the [title](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#title) option.

    <!--JavaScript-->
    var lookupOptions = {
        dataSource: lookupData,
        title: "Available values"
    }

You can also specify a custom template for the popup window title using the [titleTemplate](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#titleTemplate) option. For detailed information on using templates, refer to the [Customize Widget Element Appearance](/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/) topic.

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/) 

</article>