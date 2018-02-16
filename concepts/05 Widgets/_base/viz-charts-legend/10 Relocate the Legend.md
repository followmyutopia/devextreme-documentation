The legend can be 
#if Chart
moved inside the chart using the [position](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#position) option, and also 
#endif
aligned in the horizontal or vertical direction using the [horizontalAlignment](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Configuration/legend/#horizontalAlignment) or [verticalAlignment](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Configuration/legend/#verticalAlignment) option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            legend: {
#if Chart
                position: "inside", // or "outside"
#endif
                horizontalAlignment: "center", // or "left" | "right"
                verticalAlignment: "top" // or "bottom"
            }
        });
    });

##### Angular

    <!--HTML--><dx-{widget-name}>
        <dxo-legend
#if Chart
            position="inside" <!-- or "outside" -->
#endif
            horizontalAlignment="center" <!-- or "left" | "right" -->
            verticalAlignment="top"> <!-- or "bottom" -->
        </dxo-legend>
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

---

Below, you can try out these options in action.

#if Chart
<div class="simulator-desktop-container" data-view="/Content/Applications/18_1/DataVisualization/Guides/Legend/relocateTheLegend.html, /Content/Applications/18_1/DataVisualization/Guides/Legend/relocateTheLegend.js, /Content/Applications/18_1/DataVisualization/Guides/Legend/relocateTheLegend.css"></div>
#endif

#if PieChart
<div class="simulator-desktop-container" data-view="/Content/Applications/18_1/DataVisualization/Guides/PieChartLegend/relocateTheLegend.html, /Content/Applications/18_1/DataVisualization/Guides/PieChartLegend/relocateTheLegend.js, /Content/Applications/18_1/DataVisualization/Guides/PieChartLegend/relocateTheLegend.css"></div>
#endif

#####See Also#####
- [Rearrange Legend Items](/Documentation/Guide/Widgets/{WidgetName}/Legend/Rearrange_Legend_Items/)
#if Chart
- [Chart Demos](/Demos/WidgetsGallery/Demo/Charts/StepLine/jQuery/Light/)
#endif
#if PieChart
- [PieChart Demos](/Demos/WidgetsGallery/Demo/Charts/PieWithMultipleSeries/jQuery/Light/)
#endif
