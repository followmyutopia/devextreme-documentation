To specify when the **Popover** should be shown and hidden, set the [showEvent](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/showEvent/) and [hideEvent](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/hideEvent/) options. These options can accept several events at once as well as an object.

    <!--JavaScript-->$(function() {
        $("#popoverContainer").dxPopover({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend'
        });
    });

The **Popover** can also be hidden when a user clicks outside it or presses the **Back** button on the device. To control this behavior of the **Popover**, use the [closeOnBackButton](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#closeOnBackButton) and [closeOnOutsideClick](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#closeOnOutsideClick) options.

    <!--JavaScript-->$(function() {
        $("#popoverContainer").dxPopover({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            closeOnBackButton: false,
            closeOnOutsideClick: false
        });
    });