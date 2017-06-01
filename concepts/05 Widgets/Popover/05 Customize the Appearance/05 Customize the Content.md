If you need to define the **Popover** content, specify a template for it. You can simply put this template inside the **Popover** container...

    <!--HTML--><img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <div id="popoverContainer">
        <p>Popover content</p>
    </div>

... or you can combine the HTML markup for the template in the [contentTemplate](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#contentTemplate) function. Note that this function will be called only once - when the **Popover** appears for the first time.

    <!--JavaScript-->$(function() {
        $("#popoverContainer").dxPopover({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            contentTemplate: function () {
                return $("<p />").text("Popover content");
            }
        });
    });

[note]If you [use jQuery alone](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) and the **Popover** should contain other DevExtreme widgets, you need to create them within a function handling the [contentReady](/Documentation/ApiReference/UI_Widgets/dxPopover/Events/#contentReady) event as shown in the following example.

    <!--HTML--><img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <div id="popoverContainer">
        <div id="switchContainer"></div>
    </div>

    <!--JavaScript-->$(function() {
        $("#popoverContainer").dxPopover({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            onContentReady: function () {
                $("#switchContainer").dxSwitch({
                    // The "Switch" widget is configured here
                });
            }
        });
    });

If you need to render different templates depending on a specific condition, define them inside the **Popover** container using the DevExtreme [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/) markup component. To switch the templates on-the-fly, change the value of the [contentTemplate](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#contentTemplate) option.

    <!--HTML--><img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <div id="buttonContainer"></div>
    <div id="popoverContainer">
        <div data-options="dxTemplate: { name: 'template1' }">
            <p>First template</p>
        </div>
        <div data-options="dxTemplate: { name: 'template2' }">
            <p>Second template</p>
        </div>
    </div>

    <!--JavaScript-->$(function() {
        var popover = $("#popoverContainer").dxPopover({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            contentTemplate: 'template1'
        }).dxPopover("instance");

        $("#buttonContainer").dxButton({
            text: "Change the Template", 
            onClick: function (e) {
                if (popover.option("contentTemplate") == "template1") {
                    popover.option("contentTemplate", "template2");
                } else {
                    popover.option("contentTemplate", "template1");
                }
            } 
        });
    });

    <!--CSS-->#buttonContainer {
        display: block;
        width: 200px
    }

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)
- [Popover - Customize the Title](/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Customize_the_Title/)
- [Popover - Specify Toolbar Items](/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Specify_Toolbar_Items/)
- [Popover - Color the Shading of the Background](/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Color_the_Shading_of_the_Background/)
- [Popover Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogs_and_notifications-popover-overview)
- [Popover API Reference](/Documentation/ApiReference/UI_Widgets/dxPopover/)

[tags]popover, overlay, template, customize the content, content template