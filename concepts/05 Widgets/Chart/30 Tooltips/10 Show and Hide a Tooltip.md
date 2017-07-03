Each series point allows you to show or hide its tooltip programmatically. For this, call the **showTooltip()** or **hideTooltip()** method of the [Point](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/) object. You can access this object [with the API methods](/Documentation/Guide/Widgets/Chart/Series_Points/Access_a_Series_Point_Using_the_API/) or in the handlers of the point events, such as [pointClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#pointClick), [pointHoverChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#pointHoverChanged), etc. The latter is demonstrated in the following code.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            // Shows the tooltip only when a user clicks a series point
            onPointClick: function (e) {
                var point = e.target;
                point.showTooltip();
            },
            // Hides the tooltip once the user moves away from the series point
            onPointHoverChanged: function (e) {
                var point = e.target;
                if (!point.isHovered()) {
                    point.hideTooltip();
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart
        (onPointClick)="onPointClick($event)"
        (onPointHoverChanged)="onPointHoverChanged($event)">
    </dx-chart>

    <!--TypeScript-->
    export class AppComponent {
        // Shows the tooltip only when a user clicks a series point
        onPointClick (e) {
            let point = e.target;
            point.showTooltip();
        },
        // Hides the tooltip once the user moves away from the series point
        onPointHoverChanged (e) {
            let point = e.target;
            if (!point.isHovered()) {
                point.hideTooltip();
            }
        }
    }

---

You can also hide the tooltip regardless of the point to which it belongs. To do this, call the **hideTooltip()** method of the **Chart** instance.

---
##### jQuery

    <!--JavaScript-->$("#chartContainer").dxChart("hideTooltip");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxChartModule, DxChartComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxChartComponent) chart: DxChartComponent;
        hideTooltip () {
            this.chart.instance.hideTooltip();
        };
    }

---

#####See Also#####
- [Handle Tooltip Events](/Documentation/Guide/Widgets/Chart/Tooltips/Handle_Tooltip_Events/)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, tooltips, show tooltip, showTooltip, hide tooltip, hideTooltip
