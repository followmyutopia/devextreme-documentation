Axis labels display values indicated by [major axis ticks](/Documentation/Guide/Widgets/Chart/Axes/Axis_Ticks/).

![DevExtreme HTML5 JavaScript Charts AxisLabels](/Content/images/doc/16_2/ChartJS/visual_elements/axis_labels.png)

You can configure axis labels using the [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/label/) object. It comprises options that specify the [alignment](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/label/#alignment), [font](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/label/font/), [text](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/label/#customizeText), and other attributes of axis labels. Pay particular attention to the [overlappingBehavior](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/label/overlappingBehavior/) option that allows you to decide how axis labels should behave when they overlap each other.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
			// ...
            argumentAxis: { // or valueAxis, or commonAxisSettings
                label: {
					overlappingBehavior: {
						mode: 'rotate',
						rotationAngle: 45
					}
				}
            }
        });
    });

#####See Also#####
- [Axis Ticks](/Documentation/Guide/Widgets/Chart/Axes/Axis_Ticks/)
- [Axis Titles](/Documentation/Guide/Widgets/Chart/Axes/Axis_Titles/)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, axis labels, overlapping behavior, overlappingBehavior