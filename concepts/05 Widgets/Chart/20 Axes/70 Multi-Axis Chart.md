A multi-axis chart adds extra meanings to visualized data in comparison to a single-axis chart. For example, in a single-axis chart, you have to choose which values to indicate - absolute or percentage. With a multi-axis chart, you are free to indicate both absolute and percentage values on two separate axis.

![DevExtreme HTML5 JavaScript Charts MultipleValueAxes](/Content/images/doc/17_1/ChartJS/visual_elements/value_axis_multiple.png)

To configure a multi-axis chart, follow the steps below.

1. **Create and name the value axes**         
Declare several objects in the [valueAxis](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/) array. Each object configures a single value axis. Then, give each value axis a unique [name](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#name).

        <!--JavaScript-->$(function() {
            $("#chartContainer").dxChart({
                // ...
                valueAxis: [{
                    name: 'absoluteAxis'
                }, {
                    name: 'percentageAxis'
                }]
            });
        });

2. **Bind series to value axes**        
Bind each series to a value axis using the [axis](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#axis) option. If the **axis** option is missing from the series configuration, such a series will be bound to the axis declared first in the **valueAxis** array.

        <!--JavaScript-->$(function() {
            $("#chartContainer").dxChart({
                // ...
                series: [{
                    axis: 'percentageAxis'
                }, {
                    axis: 'percentageAxis'
                }, {
                    // this series will be automatically bound to the 'absoluteAxis'
                }]
            });
        });

All value axes in the **Chart** are synchronized by default, but you can explicitly specify the value at which one axis should be synchronized with others. For this purpose, set the [synchronizedValue](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#synchronizedValue) option. In addition, you can add more space between two side-by-side axes using the [multipleAxesSpacing](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#multipleAxesSpacing) option.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            valueAxis: [{
                name: 'absoluteAxis',
                synchronizedValue: 0
            }, {
                name: 'percentageAxis',
                synchronizedValue: 0,
                multipleAxesSpacing: 10
            }]
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/MultipleAxes/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

#####See Also#####
- [Multi-Pane Chart](/Documentation/Guide/Widgets/Chart/Panes/Multi-Pane_Chart/)
- [Limit and Relocate the Axes](/Documentation/Guide/Widgets/Chart/Axes/Limit_and_Relocate_the_Axes/)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, multiple value axes, synchronize axes, synchronizedValue, multipleAxesSpacing
