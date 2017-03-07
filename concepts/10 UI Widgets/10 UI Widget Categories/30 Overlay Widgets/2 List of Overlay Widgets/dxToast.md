<article data-show="Content/Applications/16_1/UIWidgets/dxToast/markup.html,
        Content/Applications/16_1/UIWidgets/dxToast/script.js,
        Content/Applications/16_1/UIWidgets/dxToast/styles.css">

The [Toast](/Documentation/ApiReference/UI_Widgets/dxToast/) widget displays a toast with a specified message.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationstoasttoasttoast/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common overlay widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Control widget visibility](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#Common_Tasks/Control_The_Widget_Visibility)  
- [Position a widget](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#Common_Tasks/Position_a_Widget)  
- [Adjust animation options](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#Common_Tasks/Adjust_Animation_Options)  
- [Specify display mode](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#Common_Tasks/Display_Modes)  

In addition to common overlay functionality, the widget enables you to perform the following adjustments.

**Specify a message text**

The message text is specified using the [message](/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#message) option.

    <!--JavaScript-->
    var toastOptions = {
        message: "Toast is displayed"
    }

**Hiding the toast**

By default, the toast message disappears after 2 seconds. You can change this behavior using the [displayTime](/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#displayTime) option, which specifies the display time in milliseconds.

    <!--JavaScript-->
    var toastOptions = {
        displayTime: 5000
    }

An end-user can drag the toast away from the screen to hide it before the specified display time is elapsed. To disable this functionality, set the [closeOnSwipe](/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#closeOnSwipe) option to *false*.

In addition, the **Toast** widget includes the following options that can enable additional ways to hide the widget before the display time elapses.

- [closeOnBackButton](/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#closeOnBackButton)  
 Specifies whether or not the widget is closed if a user presses the **Back** hardware button.

- [closeOnClick](/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#closeOnClick)  
 Specifies whether or not the toast is closed if a user clicks it.

- [closeOnOutsideClick](/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#closeOnOutsideClick)  
 Specifies whether or not the widget is closed if a user clicks outside of it.

- [closeOnSwipe](/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#closeOnSwipe)  
 Specifies whether or not the toast is closed if a user swipes it out of the screen boundaries.

**Specify the toast type**

You can also specify the toast type using the [type](/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#type) option, which takes on one of the following values: "info", "warning", "error", "success" and "custom". This option affects the toast color and the icon displayed in the message.

    <!--JavaScript-->
    var toastOptions = {
        type: "info"
    }

The "custom" type enables you to specify a custom toast appearance. In this case, the toast will display the contents of the widget container element.

    <!--HTML-->
    <div id="toastContainer">
        <p>Custom toast message</p>
        <div class="dx-icon dx-icon-toolbox"></div>
    </div>
</article>