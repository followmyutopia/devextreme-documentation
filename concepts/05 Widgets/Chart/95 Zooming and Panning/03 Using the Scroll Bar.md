The scrollbar is a chart element used for panning.

![DevExtreme HTML5 JavaScript Charts ScrollBar](/Content/images/doc/19_2/ChartJS/visual_elements/scroll_bar.png)

You can configure the scrollbar using the [scrollBar](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/scrollBar/) object. To display the scrollbar, set this object's [visible](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/scrollBar/#visible) option to **true** after [enabling zooming and panning](/Documentation/Guide/Widgets/Chart/Zooming_and_Panning/#Using_Mouse_Commands_or_Touch_Gestures).

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#chartContainer").dxChart({
            // ...
            zoomAndPan: {
                argumentAxis: "both",
                valueAxis: "both"
            },
            scrollBar: {
                visible: true,
                //...
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-zoom-and-pan
            argumentAxis="both"
            valueAxis="both">
        </dxo-zoom-and-pan>
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

Users cannot zoom or scroll the chart out of the whole range. Refer to the [Visual and Whole Ranges](/Documentation/Guide/Widgets/Chart/Axes/Visual_and_Whole_Ranges/) article for more information.

#####See Also#####
- [Set the Initial Zoom](/Documentation/Guide/Widgets/Chart/Zooming_and_Panning/#Set_the_Initial_Zoom)
