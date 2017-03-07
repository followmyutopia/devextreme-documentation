<article data-show="Content/Applications/16_1/UIWidgets/dxPopover/markup.html,
        Content/Applications/16_1/UIWidgets/dxPopover/script.js,
        Content/Applications/16_1/UIWidgets/dxPopover/styles.css">

The [Popover](/Documentation/ApiReference/UI_Widgets/dxPopover/) widget is an overlay with an arrow that points to the UI element that has been clicked or tapped. 

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationspopoverpopoverpopover/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common overlay widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Control widget visibility](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#Common_Tasks/Control_The_Widget_Visibility)  
- [Position a widget](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#Common_Tasks/Position_a_Widget)  
- [Adjust animation options](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#Common_Tasks/Adjust_Animation_Options)  
- [Specify display mode](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#Common_Tasks/Display_Modes)  

In addition to common overlay functionality, the widget enables you to perform the following adjustments.

**Specify the target element**

Use the [target](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#target) option to specify the UI element, which the widget points to.

    <!--JavaScript-->
    var popoverOptions = {
        target: "#targetButton"
    }

**Specify the widget title**

You can specify whether or not the widget displays a title using the [showTitle](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#showTitle) option. If this option is enabled, specify the title text using the [title](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#title) option. 

    <!--JavaScript-->
    var popoverOptions = {
        showTitle: true,
        title: 'Popover title'
    }

You can also specify a custom title appearance using the [titleTemplate](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#titleTemplate) option.

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance/) - principles of item title appearance customization are the same as those of widget appearance customization
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/) - principles of item title appearance customization are the same as those of widget appearance customization


</article>