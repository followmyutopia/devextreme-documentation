When the **LoadPanel** is shown, the area beneath it can be shaded. The shading color is specified by the [shadingColor](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#shadingColor) option.

    <!--JavaScript-->$(function() {
		$("#loadPanelContainer").dxLoadPanel({
            closeOnOutsideClick: true,
            shadingColor: "rgba(0, 0, 0, 0.2)"
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
- [LoadPanel - Change the Text](/Documentation/Guide/Widgets/LoadPanel/Customize_the_Appearance/Change_the_Text/)
- [LoadPanel - Hide the Pane](/Documentation/Guide/Widgets/LoadPanel/Customize_the_Appearance/Hide_the_Pane/)
- [LoadPanel - Resize and Relocate](/Documentation/Guide/Widgets/LoadPanel/Resize_and_Relocate/)
- [LoadPanel Demos](/Demos/WidgetsGallery/#demo/dialogs_and_notifications-load_panel-overview)
- [LoadPanel API Reference](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/)

[tags]loadPanel, load panel, overlay, load panel shading, background, shading color