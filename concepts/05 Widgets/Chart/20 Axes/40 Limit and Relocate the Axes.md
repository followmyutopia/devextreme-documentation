The visual range of arguments/values on an axis should include all arguments/values of all series. If you want to reduce the visual range, specify the axis's [visualRange](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/visualRange/) option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: { // or valueAxis
                visualRange: [1950, 2000]
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis
            [visualRange]="[1950, 2000]">
        </dxo-argument-axis>
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

Axes can be relocated to their opposite side using the [position](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#position) option. Note that available positions for each axis depend on whether the chart is [rotated](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#rotated) or not.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: {
                position: 'top'
            },
            valueAxis: {
                position: 'right'
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis
            position="top">
        </dxo-argument-axis>
        <dxi-value-axis
            position="right">
        </dxi-value-axis>
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

![DevExtreme HTML5 JavaScript Charts ArgumentAxis ValueAxis](/Content/images/doc/19_1/ChartJS/visual_elements/axes_relocated.png)

#####See Also#####
- [Axis Titles](/Documentation/Guide/Widgets/Chart/Axes/Axis_Titles/)
- [Axis Labels](/Documentation/Guide/Widgets/Chart/Axes/Axis_Labels/)
- [Multi-Axis Chart](/Documentation/Guide/Widgets/Chart/Axes/Multi-Axis_Chart/)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, min axis value, max axis value, axis margins, valueMarginsEnabled, minValueMargin, maxValueMargin, axis position, rotated chart
