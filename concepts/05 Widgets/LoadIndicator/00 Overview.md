The **LoadIndicator** is a UI element notifying the viewer that a process is in progress.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/dialogs_and_notifications-load_indicator-overview"
}

The following code adds a simple **LoadIndicator** to your page. You can change the widget size, using the [height](/Documentation/ApiReference/UI_Widgets/dxLoadIndicator/Configuration/#height) and [width](/Documentation/ApiReference/UI_Widgets/dxLoadIndicator/Configuration/#height) options.

---
##### jQuery

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

##### Angular

    <!--HTML-->
    <dx-load-indicator
        [(visible)]="isLoadIndicatorVisible"
        [height]="40"
        [width]="40">
    </dx-load-indicator>

    <!--TypeScript-->
    import { DxLoadIndicatorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isLoadIndicatorVisible: boolean = true;
    }
    @NgModule({
        imports: [
            // ...
            DxLoadIndicatorModule
        ],
        // ...
    })

---

If you need to use a custom image in the **LoadIndicator**, assign its URL to the [indicatorSrc](/Documentation/ApiReference/UI_Widgets/dxLoadIndicator/Configuration/#indicatorSrc) option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#loadIndicatorContainer").dxLoadIndicator({
            visible: true,
            indicatorSrc: "https://js.devexpress.com/Content/data/loadingIcons/rolling.svg"
        });
    });

##### Angular

    <!--HTML-->
    <dx-load-indicator
        [(visible)]="isLoadIndicatorVisible"
        [indicatorSrc]="indicatorUrl">
    </dx-load-indicator>

    <!--TypeScript-->
    import { DxLoadIndicatorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        isLoadIndicatorVisible: boolean = true;
        indicatorUrl: string = "https://js.devexpress.com/Content/data/loadingIcons/rolling.svg";
    }
    @NgModule({
        imports: [
            // ...
            DxLoadIndicatorModule
        ],
        // ...
    })

---

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [LoadIndicator - Show and Hide Using the API](/Documentation/Guide/Widgets/LoadIndicator/Show_and_Hide_Using_the_API/)
- [LoadIndicator API Reference](/Documentation/ApiReference/UI_Widgets/dxLoadIndicator/)
- [LoadPanel - Overview](/Documentation/Guide/Widgets/LoadPanel/Overview/)

[tags]loadIndicator, load indicator, loading indicator, overview, overlay