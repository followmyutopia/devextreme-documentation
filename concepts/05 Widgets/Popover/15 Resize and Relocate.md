To change the size of the **Popover**, specify the [height](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#height) and [width](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#width) options.

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
            height: 300,
            width: 500
        });
    });

If you need to position the **Popover** against a certain side of the [target element](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#target), set the [position](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#position) option.

    <!--JavaScript-->
    $(function() {
		$("#popoverContainer").dxPopover({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            position: "top" // or "bottom" | "left" | "right"
        });
    });


#####See Also#####
- [Popover - Show and Hide the Popover](/Documentation/Guide/Widgets/Popover/Show_and_Hide_the_Popover/)
- [Popover - Customize the Content](/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Customize_the_Content/)
- [Popover Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogs_and_notifications-popover-overview)
- [Popover API Reference](/Documentation/ApiReference/UI_Widgets/dxPopover/)

[tags]popover, overlay, size, height, width, position