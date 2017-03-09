To change the size of the **Popup**, specify the [height](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#height) and [width](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#width) options.

    <!--HTML-->
    <div id="popupContainer">
        <p>Popup content</p>
    </div>

<!---->

    <!--JavaScript-->
    $(function() {
		$("#popupContainer").dxPopup({
            title: "Popup Title",
            visible: true,
            height: 300,
            width: 500
        });
    });

To allow an end user to resize the **Popup**, assign *true* to the [resizeEnabled](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#resizeEnabled) option.

    <!--JavaScript-->
    $(function() {
		$("#popupContainer").dxPopup({
            title: "Popup Title",
            visible: true,
            resizeEnabled: true
        });
    });

If you need to position the **Popup** against a specific element on your page, set the [position](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#position) option.

    <!--JavaScript-->$(function() {
		$("#popupContainer").dxPopup({
            title: "Popup Title",
            visible: true,
            position: {
                my: "left",
                at: "left",
                of: "#targetElement"
            }
        });
    });

This configuration of the **position** option reads as follows: "place **my** _left_ side **at** the _left_ side **of** the *"#targetElement"*.

By default, an end user is allowed to change the **Popup** position only on desktops. To enable this feature on other devices too, set the [dragEnabled](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#dragEnabled) option to *true*. Note that the user drags the **Popup** by its title, so the title should _not_ be hidden.  

    <!--JavaScript-->$(function() {
		$("#popupContainer").dxPopup({
            title: "Popup Title",
            visible: true,
            dragEnabled: true
        });
    });

[note]Dragging is possible only if the *"height: 100%"* style is applied to the `<html>` element and *"min-height: 100%"* - to the `<body>` element.

#####See Also#####
- [Popup - Show and Hide the Popup](/Documentation/Guide/Widgets/Popup/Show_and_Hide_the_Popup/)
- [Popup - Customize the Appearance](/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Customize_the_Content/)
- [Popup Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogs_and_notifications-popup-overview)
- [Popup API Reference](/Documentation/ApiReference/UI_Widgets/dxPopup/)

[tags]popup, overlay, size, height, width, resize, position, drag