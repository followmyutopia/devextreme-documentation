A logarithmic axis indicates numeric values; each of them is the [logarithmBase](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#logarithmBase) value raised to some power. For example, **logarithmBase** that is equal to 10 produces the following values: 10<sup>-2</sup>, 10<sup>-1</sup>, 10<sup>0</sup>, 10<sup>1</sup>, 10<sup>2</sup>, 10<sup>3</sup>, etc. That is so if the [tickInterval](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/tickInterval/) option is *1*. Changing  **tickInterval**, for example, to *2* removes every second value from this sequence, leaving the following: 10<sup>-1</sup>, 10<sup>1</sup>, 10<sup>3</sup>, etc.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: { // or valueAxis
                type: 'logarithmic'
                tickInterval: 2,
                tick: { visible: true }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis
            type="logarithmic"
            [tickInterval]="2">
            <dxo-tick [visible]="true"></dxo-tick>
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

As an alternative to **tickInterval**, you can use the [axisDivisionFactor](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#axisDivisionFactor) option to arrange ticks. This option specifies the minimum distance between two side-by-side ticks in pixels.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: { // or valueAxis
                type: 'logarithmic'
                axisDivisionFactor: 20,
                tick: { visible: true }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis
            type="logarithmic"
            [axisDivisionFactor]="20">
            <dxo-tick [visible]="true"></dxo-tick>
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
- [Axis Ticks](/Documentation/Guide/Widgets/Chart/Axes/Axis_Ticks/)
- [Logarithmic Axis Demo](/Demos/WidgetsGallery/Demo/Charts/LogarithmicAxis/jQuery/Light/)
