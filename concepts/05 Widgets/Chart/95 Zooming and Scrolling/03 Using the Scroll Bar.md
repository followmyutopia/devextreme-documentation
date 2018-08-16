The scrollbar is a chart element used for scrolling.

![DevExtreme HTML5 JavaScript Charts ScrollBar](/Content/images/doc/18_2/ChartJS/visual_elements/scroll_bar.png)

You can configure the scrollbar using the [scrollBar](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/scrollBar/) object. To display the scrollbar, set this object's [visible](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/scrollBar/#visible) option to **true** after enabling [scrolling](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#scrollingMode) and [zooming](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#zoomingMode) in the **Chart**.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#chartContainer").dxChart({
            // ...
            zoomingMode: "all",
            scrollingMode: "all",
            scrollBar: {
                visible: true,
                //...
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart
        zoomingMode="all"
        scrollingMode="all">
        <dxo-scroll-bar [visible]="true" ... ></dxo-scroll-bar>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/ZoomingAndScrolling/jQuery/Light/"
}

#####See Also#####
- [Set the Initial Zoom](/Documentation/Guide/Widgets/Chart/Zooming_and_Scrolling/#Set_the_Initial_Zoom)
