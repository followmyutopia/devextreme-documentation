Each series point allows you to show or hide its tooltip programmatically by calling the **showTooltip()** or **hideTooltip()** method of the [Point](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/) object. You can access this object [with the API methods](/Documentation/Guide/Widgets/PieChart/Series/Access_a_Point_Using_the_API/) or in the handlers of the point events, such as [pointClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Events/#pointClick), [pointHoverChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Events/#pointHoverChanged), etc. The latter is demonstrated in the following code.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            // Shows the tooltip only when a user clicks a series point
            onPointClick: function (e) {
                var point = e.target;
                point.showTooltip();
            },
            // Hides the tooltip once the user moves the pointer away from the series point
            onPointHoverChanged: function (e) {
                var point = e.target;
                if (!point.isHovered()) {
                    point.hideTooltip();
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart ...
        (onPointClick)="onPointClick($event)"
        (onPointHoverChanged)="onPointHoverChanged($event)">
    </dx-pie-chart>

    <!--TypeScript-->
    export class AppComponent {
        // Shows the tooltip only when a user clicks a series point
        onPointClick (e) {
            let point = e.target;
            point.showTooltip();
        },
        // Hides the tooltip once the user moves the pointer away from the series point
        onPointHoverChanged (e) {
            let point = e.target;
            if (!point.isHovered()) {
                point.hideTooltip();
            }
        }
    }

---

You can also hide the tooltip regardless of the point to which it belongs by calling the **hideTooltip()** method of the **PieChart** instance.

---
##### jQuery

    <!--JavaScript-->$("#pieChartContainer").dxPieChart("hideTooltip");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxPieChartModule, DxPieChartComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxPieChartComponent) pieChart: DxPieChartComponent;
        hideTooltip () {
            this.pieChart.instance.hideTooltip();
        };
    }

---

#####See Also#####
- [Handle Tooltip Events](/Documentation/Guide/Widgets/PieChart/Tooltips/Handle_Tooltip_Events/)