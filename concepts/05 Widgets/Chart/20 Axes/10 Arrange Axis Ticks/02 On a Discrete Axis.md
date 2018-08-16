Values on a discrete axis are called ["categories"](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#categories), and ticks on this axis separate one category from another. In terms of tick arrangement, you can only specify whether ticks (and consequently, [grid lines](/Documentation/Guide/Widgets/Chart/Grid/)) should be placed between [axis labels](/Documentation/Guide/Widgets/Chart/Axes/Axis_Labels/) or should cross them. Use the [discreteAxisDivisionMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#discreteAxisDivisionMode) option for this purpose.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: { // or valueAxis
                tick: { visible: true },
                discreteAxisDivisionMode: 'crossLabels' // or 'betweenLabels'
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis
            discreteAxisDivisionMode="crossLabels"> <!-- or 'betweenLabels' -->
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