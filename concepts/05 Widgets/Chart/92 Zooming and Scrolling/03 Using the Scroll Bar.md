The scrollbar is a chart element used for scrolling.

![DevExtreme HTML5 JavaScript Charts ScrollBar](/Content/images/doc/18_1/ChartJS/visual_elements/scroll_bar.png)

You can configure the scrollbar using the [scrollBar](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/scrollBar/) object. To display the scrollbar, set the [visible](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/scrollBar/#visible) option of this object to **true**, but before doing this, make sure to enable [scrolling](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#scrollingMode) and [zooming](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#zoomingMode) in the **Chart**. Otherwise, the scrollbar will be inoperative.

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
    import { DxChartModule } from 'devextreme-angular';
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
