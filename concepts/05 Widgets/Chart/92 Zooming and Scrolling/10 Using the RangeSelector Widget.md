The **Chart** can be zoomed and scrolled using the [RangeSelector](/Documentation/Guide/Widgets/RangeSelector/Visual_Elements/) widget. The following code shows how to bind these widgets together. Note that both the **Chart** and **RangeSelector** have a common data source and may have common series configuration if the **RangeSelector** should display the **Chart** in the background. 

    <!--JavaScript-->
    $(function() {
        // Common data source for both widgets
        var data = [ ... ];
        // Common series configuration for both widgets
        var seriesConfiguration = [ ... ];

        var chart = $("#chartContainer").dxChart({
            dataSource: data,
            series: seriesConfiguration
        }).dxChart("instance");

        $("#rangeSelectorContainer").dxRangeSelector({
            dataSource: data,
            // Displays the Chart in the background of the RangeSelector
            chart: {
                series: seriesConfiguration
            },
            onValueChanged: function (e) {
                // Zooms the Chart
                chart.zoomArgument(e.value[0], e.value[1]);
            },
            // Makes zooming and scrolling smoother
            behavior: { callValueChanged: 'onMoving' }
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ZoomingAndScrollingAPI/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

#####See Also#####
- [zoomArgument(startValue, endValue)](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#zoomArgumentstartValue_endValue)

If you need to fix a zoom window and allow the user only to move it along the scale, set the [minRange](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/minRange/) and [maxRange](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/maxRange/) options of the [scale](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/) object to a single value defining the length of the zoom window. Make sure to specify the initial zoom using the [value](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#value) option.

    <!--JavaScript-->
    $(function() {
        // ...
        // The Chart is configured here

        $("#rangeSelectorContainer").dxRangeSelector({
            // ...
            scale: {
                minRange: 10,
                maxRange: 10,
            },
            value: [0, 10]
        });
    });

#####See Also#####
- [RangeSelector - Scale](/Documentation/Guide/Widgets/RangeSelector/Visual_Elements/#Scale)
