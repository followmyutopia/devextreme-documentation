To zoom a standalone **Chart** initially, specify the axis' [visualRange](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/visualRange/).

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#chartContainer").dxChart({
            argumentAxis: {
                visualRange: [0, 10]
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis
            [visualRange]="[0, 10]">
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
- [Visual and Whole Ranges](/Documentation/Guide/Widgets/Chart/Axes/Visual_and_Whole_Ranges/)

If the **Chart** is [bound to the RangeSelector](/Documentation/Guide/Widgets/Chart/Zooming_and_Panning/#Using_the_RangeSelector_Widget), specify the **Chart**'s initial zoom factor by setting the **RangeSelector**'s [value](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#value) option. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        // ...
        // The Chart is configured here

        $("#rangeSelectorContainer").dxRangeSelector({
            // ...
            value: [0, 10]
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis
            [(visualRange)]="chart_visualRange">
        </dxo-argument-axis>
    </dx-chart>
    <dx-range-selector ...
        [(value)]="chart_visualRange">
    </dx-range-selector>

    <!--TypeScript-->
    import { DxChartModule, DxRangeSelectorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
        chart_visualRange = [0, 10];
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule,
            DxRangeSelectorModule
        ],
        // ...
    })
    
---
