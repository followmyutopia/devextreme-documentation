The **LoadPanel** is an overlay widget notifying the viewer that loading is in progress.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/dialogs_and_notifications-load_panel-overview"
}

The following code adds to your page a simple **LoadPanel** and a [Button](/Documentation/Guide/Widgets/Button/Overview/) that invokes it. The [closeOnOutsideClick](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#closeOnOutsideClick) option set to **true** instructs the **LoadPanel** to hide once a user clicks outside it.

    <!--HTML--><div id="loadPanelContainer"></div>
    <div id="buttonContainer"></div>

    <!--JavaScript-->$(function() {
		$("#loadPanelContainer").dxLoadPanel({
            closeOnOutsideClick: true
        });
        
        $("#buttonContainer").dxButton({
            text: "Show the Load Panel", 
            onClick: function () {
                $("#loadPanelContainer").dxLoadPanel("show");
            } 
        });
    });

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [LoadPanel - Show and Hide Using the API](/Documentation/Guide/Widgets/LoadPanel/Show_and_Hide_Using_the_API/)
- [LoadPanel - Customize the Appearance](/Documentation/Guide/Widgets/LoadPanel/Customize_the_Appearance/)
- [LoadPanel - Resize and Relocate](/Documentation/Guide/Widgets/LoadPanel/Resize_and_Relocate/)
- [LoadPanel API Reference](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/)

[tags]loadPanel, load panel, overview, overlay