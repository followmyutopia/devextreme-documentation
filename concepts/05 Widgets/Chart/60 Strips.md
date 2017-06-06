A strip is a colored piece of the chart's background that highlights a range of values. Strips allow a viewer to see whether a certain series point falls in or out of a range.

![DevExtreme HTML5 JavaScript Charts Strips](/Content/images/doc/17_2/ChartJS/visual_elements/strips.png)

To configure the strips, declare the [strips](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/strips/) array in the [argumentAxis](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/) or [valueAxis](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/) object. This array should contain objects, and each of them configures a single strip. To limit a strip, set its **startValue** and **endValue** options. You may set only one of them, in which case the strip will not have a limit at one end. Note that setting the **color** option is also necessary for a strip to be displayed.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: {
                strips: [
                    { startValue: 100, endValue: 150, color: 'yellow' },
                    { startValue: 50, endValue: 70, color: 'orange' }
                ]
            },
            valueAxis: {
                strips: [
                    { startValue: 40, endValue: 50, color: 'blue' },
                    // This strip extends from 70 up to the chart's end
                    { startValue: 70, color: 'red' }
                ]
            }
        });
    });

If several strips should have a uniform style, you can specify it using one of the following objects.

- **argumentAxis** | [stripStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/stripStyle/)         
Style for strips belonging to the argument axis.

- **valueAxis** | [stripStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/stripStyle/)         
Style for strips belonging to the value axis.

- **commonAxisSettings** | [stripStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/stripStyle/)         
Style for all strips in the **Chart**.

Note that individual settings override axis-specific settings which, in turn, override common settings.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: {
                strips: [
                    // high priority
                ],
                stripStyle: {
                    // middle priority
                }
            },
            valueAxis: {
                strips: [
                    // high priority
                ],
                stripStyle: {
                    // middle priority
                }
            },
            commonAxisSettings: {
                stripStyle: {
                    // low priority
                }
            }
        });
    });

For information about all options of the strips, visit the [strips](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/strips/) section of the API reference.

#####See Also#####
- [Constant Lines](/Documentation/Guide/Widgets/Chart/Constant_Lines/)

[tags]chart, strips
