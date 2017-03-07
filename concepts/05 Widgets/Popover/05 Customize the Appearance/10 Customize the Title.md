By default, the **Popover** is displayed without a title. To add it, set the [showTitle](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#showTitle) option to *true* and specify the title text using the [title](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#title) option. The title can contain a button that closes the **Popover**. To enable it, assign *true* to the [showCloseButton](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#showCloseButton) option. 

    <!--JavaScript-->$(function() {
        $("#popoverContainer").dxPopover({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            title: "Popover Title",
            showTitle: true,
            showCloseButton: true
        });
    });

If you need to define the title completely, specify a template for it. To do this, you can use the DevExtreme [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/) markup component...

    <!--HTML--><img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <div id="popoverContainer">
        <p>Popover content</p>
        <div data-options="dxTemplate: { name: 'title' }">
            <p>Title template</p>
        </div>
    </div>

<!---->

    <!--JavaScript-->$(function() {
        $("#popoverContainer").dxPopover({
            target: "#image",
            showEvent: "dxhoverstart",
            hideEvent: "dxhoverend",
            showTitle: true,
            titleTemplate: "title"
        });
    });

... or you can combine the HTML markup for the template directly in the [titleTemplate](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#titleTemplate) function. Note that this function will be called only once - when the **Popover** appears for the first time.

    <!--HTML--><img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <div id="popoverContainer">
        <p>Popover content</p>
    </div>

<!---->

    <!--JavaScript-->$(function() {
        $("#popoverContainer").dxPopover({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            showTitle: true,
            titleTemplate: function () {
                return $("<p />").text("Title content");
            }
        });
    });

Just as you switch [content templates](/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Customize_the_Content/) on-the-fly, so can you do the same with title templates.

    <!--HTML--><img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <div id="buttonContainer"></div>
    <div id="popoverContainer">
        <p>Popover content</p>
        <div data-options="dxTemplate: { name: 'titleTemplate1' }">
            <p>First title template</p>
        </div>
        <div data-options="dxTemplate: { name: 'titleTemplate2' }">
            <p>Second title template</p>
        </div>
    </div>

<!---->

    <!--JavaScript-->$(function() {
        var popover = $("#popoverContainer").dxPopover({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            showTitle: true,
            titleTemplate: 'titleTemplate1'
        }).dxPopover("instance");

        $("#buttonContainer").dxButton({
            text: "Change the Template", 
            onClick: function (e) {
                if (popover.option("titleTemplate") == "titleTemplate1") {
                    popover.option("titleTemplate", "titleTemplate2");
                } else {
                    popover.option("titleTemplate", "titleTemplate1");
                }
            } 
        });
    });

<!---->

    <!--CSS-->#buttonContainer {
        display: block;
        width: 200px
    }

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)
- [Popover - Customize the Content](/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Customize_the_Content/)
- [Popover - Specify Toolbar Items](/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Specify_Toolbar_Items/)
- [Popover - Color the Shading of the Background](/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Color_the_Shading_of_the_Background/)
- [Popover Demo](https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogs_and_notifications-popover-overview)
- [Popover API Reference](/Documentation/ApiReference/UI_Widgets/dxPopover/)

[tags]popover, title, show title, title template, close button