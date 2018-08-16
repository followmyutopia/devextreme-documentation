The selection capability is not provided out of the box, but it can be implemented using the [pointClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#pointClick) event. The following code gives an example for the scenario when a click on a point selects it, and a subsequent click on the same point clears the selection. To check whether the point is already selected, its [isSelected()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/Methods/#isSelected) method is called.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            onPointClick: function (e) {
                var point = e.target;
                if (point.isSelected()) {
                    point.clearSelection();
                } else {
                    point.select();
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart
        (onPointClick)="onPointClick($event)">
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onPointClick (e) {
            let point = e.target;
            if (point.isSelected()) {
                point.clearSelection();
            } else {
                point.select();
            }
        };
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

In the previous code example, selection was cleared of a specific point. If you need to clear selection of all points in a series, call the [clearSelection()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/Methods/#clearSelection) method of that series.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            onPointClick: function (e) {
                var series = e.target.series;
                if (series.isSelected()) {
                    series.clearSelection();
                } else {
                    series.select();
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart
        (onPointClick)="onPointClick($event)">
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onPointClick (e) {
            let series = e.target.series;
            if (series.isSelected()) {
                series.clearSelection();
            } else {
                series.select();
            }
        };
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

If you need to clear selection of all series in the **Chart** along with their points, call the [clearSelection()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#clearSelection) method of the **Chart** instance.

---
##### jQuery

    <!--JavaScript-->$("#chartContainer").dxChart("clearSelection");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxChartModule, DxChartComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxChartComponent) chart: DxChartComponent;
        clearSelection() {
            this.chart.instance.clearSelection();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-handleevents
#include common-link-callmethods
- [Access a Series Using the API](/Documentation/Guide/Widgets/Chart/Series/Access_a_Series_Using_the_API/)
- [Series Selection Using the API](/Documentation/Guide/Widgets/Chart/Series/Selection/#API)
