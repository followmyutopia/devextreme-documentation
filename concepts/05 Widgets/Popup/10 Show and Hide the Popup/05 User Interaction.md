The **Popup** can also be hidden when a user clicks outside it or presses the **Back** button on the device. To control this behavior of the **Popup**, use the [closeOnBackButton](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#closeOnBackButton) and [closeOnOutsideClick](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#closeOnOutsideClick) options.

    <!--JavaScript-->
    $(function() {
        $("#popupContainer").dxPopup({
            title: "Popup Title",
            closeOnBackButton: false,
            closeOnOutsideClick: true
        });
    });