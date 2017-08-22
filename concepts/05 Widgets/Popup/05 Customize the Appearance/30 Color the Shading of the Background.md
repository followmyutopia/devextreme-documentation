When the **Popup** is shown, the area beneath it can be shaded. To enable this behavior, assign **true** to the [shading](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#shading) option. The shading color is specified by the [shadingColor](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#shadingColor) option.

    <!--HTML-->
    <div id="popupContainer">
        <p>Popup content</p>
    </div>

    <!--JavaScript-->$(function() {
		$("#popupContainer").dxPopup({
            title: "Popup Title",
            visible: true,
            shading: true,
            shadingColor: "rgba(0, 0, 0, 0.2)"
        });
    });

Note that the default shading color is transparent.

#####See Also#####
- [Popup - Customize the Content](/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Customize_the_Content/)
- [Popup - Customize the Title](/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Customize_the_Title/)
- [Popup - Specify Toolbar Items](/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Specify_Toolbar_Items/)
- [Popup Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogs_and_notifications-popup-overview)
- [Popup API Reference](/Documentation/ApiReference/UI_Widgets/dxPopup/)

[tags]popup, overlay, shading, background, shading color