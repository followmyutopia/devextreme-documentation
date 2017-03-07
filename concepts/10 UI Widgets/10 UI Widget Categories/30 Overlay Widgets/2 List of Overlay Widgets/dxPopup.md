﻿<article data-show="Content/Applications/16_1/UIWidgets/dxPopup/markup.html,
        Content/Applications/16_1/UIWidgets/dxPopup/script.js,
        Content/Applications/16_1/UIWidgets/dxPopup/styles.css">

The [Popup](/Documentation/ApiReference/UI_Widgets/dxPopup/) widget is a popup window displaying specified content. 

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationspopuppopuppopup/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common overlay widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Control widget visibility](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#Common_Tasks/Control_The_Widget_Visibility)  
- [Position a widget](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#Common_Tasks/Position_a_Widget)  
- [Adjust animation options](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#Common_Tasks/Adjust_Animation_Options)  
- [Specify display mode](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#Common_Tasks/Display_Modes)  

In addition to common overlay functionality, the widget enables you to perform the following adjustments.

**Specify the widget title**

You can specify whether the widget displays a title or not using the [showTitle](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#showTitle) option. If this option is enabled, specify the title text using the [title](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#title) option.

    <!--JavaScript-->
    var popupOptions = {
        showTitle: true,
        title: 'Popup title'
    }

You can also specify a custom title appearance using the [titleTemplate](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#titleTemplate) option. 

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/) - principles of item title appearance customization are the same as those of widget appearance customization
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/) - principles of item title appearance customization are the same as those of widget appearance customization


**Display top and bottom toolbars**

You can also display top and bottom toolbars on the popup window. For this purpose, assign the appropriate array to the [toolbarItems](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#toolbarItems) option. This option accepts an array of items that have the same structure as [toolbar items](/Documentation/ApiReference/UI_Widgets/dxToolbar/Default_Item_Template/). But in addition to toolbar item fields, the **toolbarItems** array item includes the **toolbar** field that specifies whether the item is displayed on a top or bottom toolbar. This field accepts the *"top"* and *"bottom"* values.

    <!--JavaScript-->
    var popupOptions = {
        toolbarItems: [
            { toolbar: 'top', location: 'before', widget: 'dxButton', options: { type: 'back', text: 'Back' } },
            { toolbar: 'top', location: 'after', widget: 'dxButton', options: { icon: 'find' } },
            { toolbar: 'top', locateInMenu: 'always', text: 'Add' },
            { toolbar: 'bottom', location: 'before', widget: 'dxButton', options: { text: 'Load' } },
            { toolbar: 'bottom', location: 'before', widget: 'dxButton', options: { text: 'Save' } },
            { toolbar: 'bottom', location: 'before', widget: 'dxButton', options: { text: 'Clear' } }
        ]
    }
</article>