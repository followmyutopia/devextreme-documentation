The **Tooltip** widget displays a tooltip for a specified element on the page.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/dialogs_and_notifications-tooltip-overview"
}

The following code creates a simple **Tooltip** on your page and attaches it to another element (in this example, to an image).

    <!--HTML--><img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <div id="tooltipContainer">
        <p>Tooltip content</p>
    </div>

    <!--JavaScript-->$(function() {
        $("#tooltipContainer").dxTooltip({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend'
        });
    });

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [Tooltip - Show and Hide](/Documentation/Guide/Widgets/Tooltip/Show_and_Hide_the_Tooltip/)
- [Tooltip - Customize the Content](/Documentation/Guide/Widgets/Tooltip/Customize_the_Content/)
- [Tooltip - Resize and Relocate](/Documentation//Guide/Widgets/Tooltip/Resize_and_Relocate/)
- [Tooltip API Reference](/Documentation/ApiReference/UI_Widgets/dxTooltip/)

[tags]tooltip, overview, overlay