The **LoadIndicator** is a UI element notifying the viewer that a process is in progress.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/dialogs_and_notifications-load_indicator-overview"
}

The following code adds a simple **LoadIndicator** to your page. You can change the widget size, using the [height](/Documentation/ApiReference/UI_Widgets/dxLoadIndicator/Configuration/#height) and [width](/Documentation/ApiReference/UI_Widgets/dxLoadIndicator/Configuration/#height) options.

    <!--HTML-->
    <div id="loadIndicatorContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#loadIndicatorContainer").dxLoadIndicator({
            visible: true,
            height: 40,
            width: 40
        });
    });

If you need to use a custom image in the **LoadIndicator**, assign its URL to the [indicatorSrc](/Documentation/ApiReference/UI_Widgets/dxLoadIndicator/Configuration/#indicatorSrc) option.

    <!--JavaScript-->
    $(function() {
        $("#loadIndicatorContainer").dxLoadIndicator({
            visible: true,
            indicatorSrc: "https://js.devexpress.com/Content/data/loadingIcons/rolling.svg"
        });
    });

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [LoadIndicator - Show and Hide Using the API](/Documentation/Guide/Widgets/LoadIndicator/Show_and_Hide_Using_the_API/)
- [LoadIndicator API Reference](/Documentation/ApiReference/UI_Widgets/dxLoadIndicator/)
- [LoadPanel - Overview](/Documentation/Guide/Widgets/LoadPanel/Overview/)

[tags]loadIndicator, load indicator, loading indicator, overview, overlay