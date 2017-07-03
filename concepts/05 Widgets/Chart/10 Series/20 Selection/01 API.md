The selection capability is not provided out of the box, but it can be implemented using the [seriesClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#seriesClick) event. The following code gives an example for the scenario when a click on a series selects it, and a subsequent click on the same series clears the selection. To check whether the series is already selected, its [isSelected()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/Methods/#isSelected) method is called.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            onSeriesClick: function (e) {
                var series = e.target;
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
        (onSeriesClick)="onSeriesClick($event)">
    </dx-chart>

    <!--TypeScript-->
    export class AppComponent {
        onSeriesClick (e) {
            let series = e.target;
            if (series.isSelected()) {
                series.clearSelection();
            } else {
                series.select();
            }
        };
    }

---

There are series that consist of points only, for example, [bar](/Documentation/Guide/Widgets/Chart/Series_Types/Bar_Series/) or [financial](/Documentation/Guide/Widgets/Chart/Series_Types/Financial_Series/) series. For these series, subscribe to the [pointClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#pointClick) event instead of **seriesClick**.

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

---

In the previous code examples, selection was cleared of a specific series. If you need to clear selection of all series, call the [clearSelection()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#clearSelection) method in the **Chart** instance.

---
##### jQuery

    <!--JavaScript-->$("#chartContainer").dxChart("clearSelection");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxChartModule, DxChartComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxChartComponent) chart: DxChartComponent;
        clearSelection() {
            this.chart.instance.clearSelection();
        }
    }

---

#####See Also#####
- [Access a Series Using the API](/Documentation/Guide/Widgets/Chart/Series/Access_a_Series_Using_the_API/)
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/)
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/)
- [Point Selection Using the API](/Documentation/Guide/Widgets/Chart/Series_Points/Selection/#API)
