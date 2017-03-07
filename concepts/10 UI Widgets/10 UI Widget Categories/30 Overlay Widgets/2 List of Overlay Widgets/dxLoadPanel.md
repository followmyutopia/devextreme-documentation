<article data-show="Content/Applications/16_1/UIWidgets/dxLoadPanel/markup.html,
        Content/Applications/16_1/UIWidgets/dxLoadPanel/script.js,
        Content/Applications/16_1/UIWidgets/dxLoadPanel/styles.css">

The [LoadPanel](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/) widget is an overlaying element indicating that loading is in progress.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationsloadpanelloadpanelloadpanel/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common overlay widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Control widget visibility](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#Common_Tasks/Control_The_Widget_Visibility)  
- [Position a widget](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#Common_Tasks/Position_a_Widget)  
- [Adjust animation options](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#Common_Tasks/Adjust_Animation_Options)  
- [Specify display mode](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#Common_Tasks/Display_Modes)  

In addition to common overlay functionality, the widget enables you to perform the following adjustments.

**Specify the load panel appearance**

You can specify the message displayed by the load panel using the [message](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#message) option.

By default, the widget displays a load indicator that looks like a turning circle in addition to the specified message. You can assign false to the [showIndicator](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#showIndicator) option to disable the load indicator, which can help to avoid problems with animation on a slow device.

    <!--JavaScript-->
    var loadPanelOptions = {
        message: "Loading...",
        showIndicator: false
    }

**Specify the display delay**

You can display the load panel immediately after a loading process has been started or after the delay specified by the [delay](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#delay) option.

    <!--JavaScript-->
    var loadPanelOptions = {
        message: "Loading...",
        delay: 1000
    }

**Use a custom loading indicator**

If you need to use a custom image instead the standard indicator icon, specify the required image URL using the [indicatorSrc](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#indicatorSrc) option.

    <!--JavaScript-->
    var loadPanelOptions = {
        message: "Loading...",
        indicatorSrc: "images/indicator.png"
    }

**Show/hide the pane**

The widget can display only the load indicator without the surrounding pane. This can help you avoid the use of excess visual elements when indicating the loading process. Set the [showPane](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#showPane) option to *false* to hide the pane.

    <!--JavaScript-->
    var loadPanelOptions = {
        showPane: false
    }
</article>