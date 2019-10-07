The selection capability is not provided out of the box, but it can be implemented using the [pointClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Events/#pointClick) event. The following code gives an example of a scenario when clicking on a point selects it, and clicking on it again clears the selection. Call a point's [isSelected()](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/Methods/#isSelected) method to check whether it is selected.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
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
    <dx-pie-chart
        (onPointClick)="onPointClick($event)">
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
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
            DxPieChartModule
        ],
        // ...
    })

---

In the previous code example, a specific point's selection was cleared. Call a series' [clearSelection()](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Series/Methods/#clearSelection) method if you need to clear all the selected points in that series.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
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
    <dx-pie-chart
        (onPointClick)="onPointClick($event)">
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
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
            DxPieChartModule
        ],
        // ...
    })

---

In a multi-series **PieChart**, you can clear the entire selection at once by calling the **PieChart** instance's [clearSelection()](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#clearSelection) method.

---
##### jQuery

    <!--JavaScript-->$("#pieChartContainer").dxPieChart("clearSelection");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxPieChartModule, DxPieChartComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxPieChartComponent, { static: false }) pieChart: DxPieChartComponent;
        // Prior to Angular 8
        // @ViewChild(DxPieChartComponent) pieChart: DxPieChartComponent;
        clearSelection() {
            this.pieChart.instance.clearSelection();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

---

#####See Also#####
#include common-link-handleevents
#include common-link-callmethods
- [Access a Point Using the API](/Documentation/Guide/Widgets/PieChart/Series/Access_a_Point_Using_the_API/)
