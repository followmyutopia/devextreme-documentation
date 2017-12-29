By default, the **Popup** is displayed in a windowed mode. To show it full-screen, assign **true** to the [fullScreen](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#fullScreen) option. 

    <!--JavaScript-->
    $(function() {
		$("#popupContainer").dxPopup({
            title: "Popup Title",
            visible: true, 
            fullScreen: true
        });
    });

To define the **Popup** content, specify a template for it. You can simply put this template inside the **Popup** container...

    <!--HTML-->
    <div id="popupContainer">
        <p>Popup content</p>
    </div>

... or you can combine the HTML markup for the template in the [contentTemplate](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#contentTemplate) function. Note that this function will be called only once - when the **Popup** appears for the first time.

    <!--JavaScript-->$(function() {
        $("#popupContainer").dxPopup({
            title: "Popup Title",
            contentTemplate: function () {
                return $("<div />")
                    .dxButton({ 
                        text: 'Click me',
                        onClick: function () {
                            // ...
                        }
                    });
            }
        });
    });

If you need to render different templates depending on a specific condition, define them inside the **Popup** container using the DevExtreme [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/) markup component. To switch the templates on-the-fly, change the value of the [contentTemplate](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#contentTemplate) option.

    <!--HTML-->
    <div id="buttonContainer"></div>
    <div id="popupContainer">
        <div data-options="dxTemplate: { name: 'template1' }">
            <p>First template</p>
        </div>
        <div data-options="dxTemplate: { name: 'template2' }">
            <p>Second template</p>
        </div>
    </div>

    <!--JavaScript-->
    $(function() {
        var popup = $("#popupContainer").dxPopup({
            title: "Popup Title",
            contentTemplate: 'template1'
        }).dxPopup("instance");

        $("#buttonContainer").dxButton({
            text: "Change the Template", 
            onClick: function (e) {
                if (popup.option("contentTemplate") == "template1") {
                    popup.option("contentTemplate", "template2");
                } else {
                    popup.option("contentTemplate", "template1");
                }
                popup.show();
            } 
        });
    });

#####See Also#####
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
- [Popup - Customize the Title](/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Customize_the_Title/)
- [Popup - Specify Toolbar Items](/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Specify_Toolbar_Items/)
- [Popup - Color the Shading of the Background](/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Color_the_Shading_of_the_Background/)
- [Popup Demos](/Demos/WidgetsGallery/#demo/dialogs_and_notifications-popup-overview)
- [Popup API Reference](/Documentation/ApiReference/UI_Widgets/dxPopup/)

[tags]popup, overlay, template, customize the content, content template