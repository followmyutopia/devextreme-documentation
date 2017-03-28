Axis ticks divide an axis into parts, and thus the readability of visualized data is improved. There are major and minor ticks. The main difference between them is that major ticks are accompanied by [axis labels](/Documentation/Guide/Widgets/Chart/Axes/Axis_Labels/). In addition, the appearance of major and minor ticks may differ.

![DevExtreme HTML5 JavaScript Charts AxisTicks](/Content/images/doc/16_2/ChartJS/visual_elements/axis_ticks.png)

To configure major or minor ticks, use the [tick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/tick/) or [minorTick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/minorTick/) object respectively. Options in these objects change the **color**, **length**, **width**, and **opacity** of ticks. But before specifying them, make sure that you have made ticks [visible](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/tick/#visible).

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
			// ...
            argumentAxis: { // or valueAxis, or commonAxisSettings
                tick: { visible: true },
                minorTick: { visible: true }
            }
        });
    });

#####See Also#####
- [Arrange Axis Ticks](/Documentation/Guide/Widgets/Chart/Axes/Arrange_Axis_Ticks/)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, axis ticks, major ticks, minor ticks, ticks' appearance
