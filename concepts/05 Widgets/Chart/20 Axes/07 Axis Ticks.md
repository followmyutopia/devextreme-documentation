Axis ticks divide an axis into parts, and thus the readability of visualized data is improved. There are major and minor ticks. They differ in appearance.

![DevExtreme HTML5 JavaScript Charts AxisTicks](/Content/images/doc/19_2/ChartJS/visual_elements/axis_ticks.png)

To configure major or minor ticks, use the [tick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/tick/) or [minorTick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/minorTick/) object respectively. Options in these objects change the **color**, **length**, **width**, and **opacity** of ticks. But before specifying them, make sure that you have made ticks [visible](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/tick/#visible).

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: { // or valueAxis, or commonAxisSettings
                tick: { visible: true },
                minorTick: { visible: true }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis> <!-- or dxi-value-axis, or dxo-common-axis-settings -->
            <dxo-tick [visible]="true"></dxo-tick>
            <dxo-minor-tick [visible]="true"></dxo-minor-tick>
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

#####See Also#####
- [Arrange Axis Ticks](/Documentation/Guide/Widgets/Chart/Axes/Arrange_Axis_Ticks/)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, axis ticks, major ticks, minor ticks, ticks' appearance
