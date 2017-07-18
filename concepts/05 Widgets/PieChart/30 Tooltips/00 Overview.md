A tooltip is a small pop-up rectangle displaying information about a series point that the user pauses on. The information is the point value by default, but it is possible to display anything in a tooltip.

![DevExtreme HTML5 JavaScript PieChart Tooltip](/Content/images/doc/17_2/PieChart/visual_elements/tooltip.png)

All options configuring tooltips are collected in the [tooltip](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/tooltip/) object. For example, to enable the tooltips, assign **true** to the **enabled** option of this object.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            tooltip: {
                enabled: true
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart ... >
        <dxo-tooltip
            [enabled]="true">
        </dxo-tooltip>
    </dx-pie-chart>

---

Options declared in the **tooltip** object apply to all tooltips in the **PieChart**. If you want to customize a specific tooltip, assign a function to the [customizeTooltip](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/tooltip/#customizeTooltip) option. This function must return an object with options for the tooltip that you want to customize.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            tooltip: {
                enabled: true,
                color: 'yellow',
                // Tooltips of all points with the value more than 100 turn red
                // Other tooltips remain yellow
                customizeTooltip: function (pointInfo) {
                    return pointInfo.value > 100 ? { color: 'red' } : { }
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart ... >
        <dxo-tooltip
            [enabled]="true"
            color="yellow"
            [customizeTooltip]="customizeTooltip">
        </dxo-tooltip>
    </dx-pie-chart>

    <!--TypeScript-->
    export class AppComponent {
        // Tooltips of all points with the value more than 100 turn red
        // Other tooltips remain yellow
        customizeTooltip (pointInfo: any) {
            return pointInfo.value > 100 ? { color: 'red' } : { }
        };
    }

---

<a href='/Demos/WidgetsGallery/Demo/Charts/PieWithMultipleSeries/jQuery/Light/' class='button orange small fix-width-155' target='_blank'>View Demo</a>

#####See Also#####
- [Show and Hide a Tooltip](/Documentation/Guide/Widgets/PieChart/Tooltips/Show_and_Hide_a_Tooltip/)
- [Handle Tooltip Events](/Documentation/Guide/Widgets/PieChart/Tooltips/Handle_Tooltip_Events/)