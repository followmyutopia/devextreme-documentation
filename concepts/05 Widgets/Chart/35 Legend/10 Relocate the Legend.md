The legend can be moved inside the chart using the [position](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#position) option, and also aligned in the horizontal or vertical direction using the [horizontalAlignment](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#horizontalAlignment) or [verticalAlignment](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#verticalAlignment) option.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            legend: {
                position: "inside", // or "outside"
                horizontalAlignment: "center", // or "left" | "right"
                verticalAlignment: "top" // or "bottom"
            }
        });
    });

Below, you can try out these options in action.

<div class="simulator-desktop-container" data-view="/Content/Applications/17_1/DataVisualization/Guides/Legend/relocateTheLegend.html, /Content/Applications/17_1/DataVisualization/Guides/Legend/relocateTheLegend.js, /Content/Applications/17_1/DataVisualization/Guides/Legend/relocateTheLegend.css"></div>

#####See Also#####
- [Rearrange Legend Items](/Documentation/Guide/Widgets/Chart/Legend/Rearrange_Legend_Items/)
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/StepLine/jQuery/Light/)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, legend, position, horizontal alignment, horizontalAlignment, vertical alignment, verticalAlignment, move the legend
