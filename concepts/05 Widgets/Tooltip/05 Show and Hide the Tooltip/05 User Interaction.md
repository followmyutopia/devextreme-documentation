To specify when the **Tooltip** should be shown and hidden, set the [showEvent](/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/showEvent/) and [hideEvent](/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/hideEvent/) options. These options can accept several events at once as well as an object.

    <!--JavaScript-->$(function() {
        $("#tooltipContainer").dxTooltip({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend'
        });
    });

The **Tooltip** can also be hidden when a user clicks outside it or presses the **Back** button on the device. To control this behavior of the **Tooltip**, use the [closeOnBackButton](/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/#closeOnBackButton) and [closeOnOutsideClick](/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/#closeOnOutsideClick) options.

    <!--JavaScript-->$(function() {
        $("#tooltipContainer").dxTooltip({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            closeOnBackButton: false,
            closeOnOutsideClick: false
        });
    });