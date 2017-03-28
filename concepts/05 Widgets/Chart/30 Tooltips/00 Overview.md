A tooltip is a small pop-up rectangle displaying information about a [series point](/Documentation/Guide/Widgets/Chart/Series_Points/Overview/ that the user pauses on. By default, the information is the point value, but it is possible to display anything in a tooltip.

![DevExtreme HTML5 JavaScript Charts Tooltip](/Content/images/doc/17_1/ChartJS/visual_elements/tooltip.png)

All options configuring tooltips are collected in the [tooltip](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/tooltip/) object. For example, to enable the tooltips, assign *true* to the **enabled** option of this object.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
			// ...
			tooltip: {
                enabled: true
            }
        });
    });

Options declared in the **tooltip** object apply to all tooltips in the **Chart**. If you want to customize a specific tooltip, assign a function to the [customizeTooltip](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/tooltip/#customizeTooltip) option. This function must return an object with options for the tooltip that you want to customize.

	<!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
			// ...
			tooltip: {
                enabled: true,
                color: 'yellow',
                // Paints the tooltips of all points whose value is more than 100 in red
			    // Other tooltips remain painted in yellow
                customizeTooltip: function (pointInfo) {
                    return pointInfo.value > 100 ? { color: 'red' } : { }
                }
			}
        });
    });

#####See Also#####
- [Show and Hide a Tooltip](/Documentation/Guide/Widgets/Chart/Tooltips/Show_and_Hide_a_Tooltip/)
- [Handle the Tooltip Events](/Documentation/Guide/Widgets/Chart/Tooltips/Handle_the_Related_Events/)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, tooltips, enable tooltips, customizeTooltip