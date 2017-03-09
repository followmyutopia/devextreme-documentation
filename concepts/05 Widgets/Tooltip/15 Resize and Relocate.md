To change the size of the **Tooltip**, specify the [height](/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/#height) and [width](/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/#width) options. Note that the **Tooltip**'s arrow takes its share of the overall size.

    <!--HTML--><img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <div id="tooltipContainer">
        <p>Tooltip content</p>
    </div>

<!---->

    <!--JavaScript-->$(function() {
		$("#tooltipContainer").dxTooltip({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            height: 70,
            width: 200
        });
    });

If you need to position the **Tooltip** against a certain side of the [target element](/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/#target), set the [position](/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/#position) option.

    <!--JavaScript-->$(function() {
		$("#tooltipContainer").dxTooltip({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            position: "top" // or "bottom" | "left" | "right"
        });
    });

#####See Also#####
- [Tooltip - Customize the Content](/Documentation/Guide/Widgets/Tooltip/Customize_the_Content/)
- [Tooltip Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogs_and_notifications-tooltip-overview)
- [Tooltip API Reference](/Documentation/ApiReference/UI_Widgets/dxTooltip/)

[tags]tooltip, overlay, template, size, height, width, position