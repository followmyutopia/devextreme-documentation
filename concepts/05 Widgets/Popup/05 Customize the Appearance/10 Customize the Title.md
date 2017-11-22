By default, the **Popup** allocates a part of its area to the title, regardless of whether you specified the title text or did not. To hide the title, set the [showTitle](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#showTitle) option to **false**. Besides the text, the title area also contains a button that closes the **Popup**. To hide this button alone, assign **false** to the [showCloseButton](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#showCloseButton) option. 

    <!--JavaScript-->$(function() {
        $("#popupContainer").dxPopup({
            showTitle: false,
            visible: true
        });
    });

If you need to define the title completely, specify a template for it. To do this, you can use the DevExtreme [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/) markup component...

    <!--HTML-->
    <div id="popupContainer">
        <p>Popup content</p>
        <div data-options="dxTemplate: { name: 'title' }">
            <p>Title template</p>
        </div>
    </div>

    <!--JavaScript-->
    $(function() {
        $("#popupContainer").dxPopup({
            titleTemplate: "title"
        });
    });

... or you can combine the HTML markup for the template directly in the [titleTemplate](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#titleTemplate) function. Note that this function will be called only once - when the **Popup** appears for the first time.

    <!--HTML-->
    <div id="popupContainer">
        <p>Popup content</p>
    </div>

    <!--JavaScript-->$(function() {
        $("#popupContainer").dxPopup({
            titleTemplate: function () {
                return $("<p />").text("Title content");
            }
        });
    });

Just as you switch [content templates](/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Customize_the_Content/) on-the-fly, so can you do the same with title templates.

    <!--HTML-->
    <div id="buttonContainer"></div>
    <div id="popupContainer">
        <p>Popup content</p>
        <div data-options="dxTemplate: { name: 'titleTemplate1' }">
            <p>First title template</p>
        </div>
        <div data-options="dxTemplate: { name: 'titleTemplate2' }">
            <p>Second title template</p>
        </div>
    </div>

    <!--JavaScript-->
    $(function() {
        var popup = $("#popupContainer").dxPopup({
            titleTemplate: 'titleTemplate1'
        }).dxPopup("instance");

        $("#buttonContainer").dxButton({
            text: "Change the Template", 
            onClick: function (e) {
                if (popup.option("titleTemplate") == "titleTemplate1") {
                    popup.option("titleTemplate", "titleTemplate2");
                } else {
                    popup.option("titleTemplate", "titleTemplate1");
                }
                popup.show();
            } 
        });
    });

#####See Also#####
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
- [Popup - Customize the Content](/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Customize_the_Content/)
- [Popup - Specify Toolbar Items](/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Specify_Toolbar_Items/)
- [Popup - Color the Shading of the Background](/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Color_the_Shading_of_the_Background/)
- [Popup Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogs_and_notifications-popup-overview)
- [Popup API Reference](/Documentation/ApiReference/UI_Widgets/dxPopup/)

[tags]popup, title, show title, title template, close button