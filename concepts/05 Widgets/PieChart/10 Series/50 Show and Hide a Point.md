The **PieChart** provides an API for showing and hiding a series point at runtime. This API is commonly used to show or hide a series point when a user clicks the [chart legend](/Documentation/Guide/Widgets/PieChart/Legend/Overview/). You need to handle the [legendClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Events/#legendClick) event as shown below to implement this scenario. The **isVisible()**, **hide()** and **show()** are [Point](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/) object methods. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            onLegendClick: function (e) {
                var points = e.points;
                // for a single-series PieChart
                points[0].isVisible() ? points[0].hide() : points[0].show();

                /* for a multi-series PieChart
                points.forEach(function (point) {
                    point.isVisible() ? point.hide() : point.show();
                });
                */
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-pie-chart
        (onLegendClick)="onLegendClick($event)">
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        onLegendClick (e) {
            let points = e.points;
            // for a single-series PieChart
            points[0].isVisible() ? points[0].hide() : points[0].show();

            /* for a multi-series PieChart
            points.forEach(function (point) {
                point.isVisible() ? point.hide() : point.show();
            });
            */
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
