To change the text displayed by the **LoadPanel**, use the [message](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#message) option.

    <!--JavaScript-->$(function() {
		$("#loadPanelContainer").dxLoadPanel({
            closeOnOutsideClick: true,
            message: "Please, wait..."
        });
        
        $("#buttonContainer").dxButton({
            text: "Show the Load Panel", 
            onClick: function () {
                $("#loadPanelContainer").dxLoadPanel("show");
            } 
        });
    });

#####See Also#####
- [LoadPanel - Customize the Loading Indicator](/Documentation/Guide/Widgets/LoadPanel/Customize_the_Appearance/Customize_the_Loading_Indicator/)
- [LoadPanel - Hide the Pane](/Documentation/Guide/Widgets/LoadPanel/Customize_the_Appearance/Hide_the_Pane/)
- [LoadPanel - Color the Shading of the Background](/Documentation/Guide/Widgets/LoadPanel/Customize_the_Appearance/Color_the_Shading_of_the_Background/)
- [LoadPanel - Resize and Relocate](/Documentation/Guide/Widgets/LoadPanel/Resize_and_Relocate/)
- [LoadPanel Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogs_and_notifications-load_panel-overview)
- [LoadPanel API Reference](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/)

[tags]loadPanel, load panel, overlay, load panel text