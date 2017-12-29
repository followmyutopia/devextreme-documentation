To change the size of the **LoadPanel**, specify the **height** and **width** options.

    <!--JavaScript-->$(function() {
		$("#loadPanelContainer").dxLoadPanel({
            closeOnOutsideClick: true,
            height: 300,
            width: 500
        });

        $("#buttonContainer").dxButton({
            text: "Show the Load Panel", 
            onClick: function () {
                $("#loadPanelContainer").dxLoadPanel("show");
            } 
        });
    });

If you need to position the **LoadPanel** against a specific element on your page, set the [position](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#position) option.

    <!--JavaScript-->$(function() {
		$("#loadPanelContainer").dxLoadPanel({
            closeOnOutsideClick: true,
            position: {
                my: "left",
                at: "left",
                of: "#targetElement"
            }
        });

        $("#buttonContainer").dxButton({
            text: "Show the Load Panel", 
            onClick: function () {
                $("#loadPanelContainer").dxLoadPanel("show");
            } 
        });
    });

This configuration of the **position** option reads as follows: "place **my** _left_ side **at** the _left_ side **of** the *"#targetElement"*.

#####See Also#####
- [LoadPanel - Customize the Appearance](/Documentation/Guide/Widgets/LoadPanel/Customize_the_Appearance/)
- [LoadPanel Demos](/Demos/WidgetsGallery/#demo/dialogs_and_notifications-load_panel-overview)
- [LoadPanel API Reference](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/)

[tags]loadPanel, load panel, overlay, size, height, width, position