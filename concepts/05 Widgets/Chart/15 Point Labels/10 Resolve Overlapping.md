In multi-series charts, point labels often overlap. To decide how to resolve overlapping, employ the [resolveLabelOverlapping](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#resolveLabelOverlapping) option. It allows you to hide certain labels, or arrange all labels in stacks, or keep the labels as they are (i.e. overlapping).

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            resolveLabelOverlapping: 'stack' // or 'hide' | 'none'
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart
        resolveLabelOverlapping="stack"> <!-- or 'hide' | 'none' -->
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

Another way to deal with overlapping labels is to hide all labels of a specific series once their count exceeds a certain limit. Mostly, this feature is useful if the series accepts new points at runtime. To specify the limit on point labels, assign a number to the [maxLabelCount](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#maxLabelCount) option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            series: [{
                // ...
                maxLabelCount: 10
            }, {
                // ...
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ... >
        <dxi-series [maxLabelCount]="10" ... ></dxi-series>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
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
- [Customize Point Labels](/Documentation/Guide/Widgets/Chart/Point_Labels/Customize_Point_Labels/)
- [Series Points](/Documentation/Guide/Widgets/Chart/Series_Points/Overview/)
- [Chart Demos](/Demos/WidgetsGallery/Demo/Charts/CustomizePointsAndLabels/jQuery/Light/)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, point labels, label overlapping, resolveLabelOverlapping, maxLabelCount
