The pane is the element that lies under the loading indicator and text.

![DevExtreme HTML5 JavaScript LoadPanel](/Content/images/doc/17_2/UiWidgets/LoadPanel/LoadPanel_Pane.png)

The pane is shown by default. To hide it, assign **false** to the [showPane](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#showPane) option.

    <!--JavaScript-->$(function() {
		$("#loadPanelContainer").dxLoadPanel({
            closeOnOutsideClick: true,
            showPane: false
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
- [LoadPanel - Color the Shading of the Background](/Documentation/Guide/Widgets/LoadPanel/Customize_the_Appearance/Color_the_Shading_of_the_Background/)
- [LoadPanel - Resize and Relocate](/Documentation/Guide/Widgets/LoadPanel/Resize_and_Relocate/)
- [LoadPanel Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogs_and_notifications-load_panel-overview)
- [LoadPanel API Reference](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/)

[tags]loadPanel, load panel, overlay, load panel pane, hide pane