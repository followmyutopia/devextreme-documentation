To change the size of the **Toast**, specify the [height](/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#height) and [width](/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#width) options.

    <!--HTML--><div id="toastContainer"></div>
    <div id="buttonContainer"></div>

<!---->

    <!--JavaScript-->$(function() {
		$("#toastContainer").dxToast({
            message: "Connection problem",
            type: "error",
            height: 55,
            width: 300
        });

        $("#buttonContainer").dxButton({
            text: "Show the Toast", 
            onClick: function () {
                $("#toastContainer").dxToast("show");
            } 
        });
    });


If you need to position the **Toast** against a specific element on your page, set the [position](/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#position) option.

    <!--JavaScript-->$(function() {
		$("#toastContainer").dxToast({
            message: "Connection problem",
            type: "error",
            position: {
                my: "left",
                at: "left",
                of: "#targetElement"
            }
        });

        $("#buttonContainer").dxButton({
            text: "Show the Toast", 
            onClick: function () {
                $("#toastContainer").dxToast("show");
            } 
        });
    });

This configuration of the **position** option reads as follows: "place **my** _left_ side **at** the _left_ side **of** the *"#targetElement"*.

#####See Also#####
- [Toast - Customize the Content](/Documentation/Guide/Widgets/Toast/Customize_the_Content/)
- [Toast Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogs_and_notifications-toast-overview)
- [Toast API Reference](/Documentation/ApiReference/UI_Widgets/dxToast/)

[tags]toast, overlay, template, size, height, width, position