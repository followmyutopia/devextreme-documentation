The visual range of arguments/values on an axis should include all arguments/values of all series. If you want to reduce the visual range, specify the [min](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#min) and [max](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#max) options of the axis. Note that if the [valueMarginsEnabled](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#valueMarginsEnabled) option stays *true*, the axis extends beyond the **min** and **max** values because of margins specified by the [minValueMargin](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#minValueMargin) and [maxValueMargin](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#maxValueMargin) options.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: { // or valueAxis
                min: 1950,
                max: 2000,
                valueMarginsEnabled: false
            }
        });
    });

Axes can be relocated to their opposite side using the [position](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#position) option. Note that available positions for each axis depend on whether the chart is [rotated](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#rotated) or not.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: {
                position: 'top'
            },
            valueAxis: {
                position: 'right'
            }
        });
    });

![DevExtreme HTML5 JavaScript Charts ArgumentAxis ValueAxis](/Content/images/doc/17_1/ChartJS/visual_elements/axes_relocated.png)

#####See Also#####
- [Axis Titles](/Documentation/Guide/Widgets/Chart/Axes/Axis_Titles/)
- [Axis Labels](/Documentation/Guide/Widgets/Chart/Axes/Axis_Labels/)
- [Multi-Axis Chart](/Documentation/Guide/Widgets/Chart/Axes/Multi-Axis_Chart/)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, min axis value, max axis value, axis margins, valueMarginsEnabled, minValueMargin, maxValueMargin, axis position, rotated chart
