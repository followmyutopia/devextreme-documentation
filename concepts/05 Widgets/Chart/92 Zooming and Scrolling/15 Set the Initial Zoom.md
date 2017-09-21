To zoom a standalone **Chart** initially, call its [zoomArgument(startValue, endValue)](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#zoomArgumentstartValue_endValue) method after the **Chart** is created.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var chart = $("#chartContainer").dxChart({
            // ...
        }).dxChart("instance");

        chart.zoomArgument(300, 500)
    });

##### Angular

    <!--HTML--><dx-chart ...
        (onDone)="zoom($event)">
    </dx-chart>

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxChartModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        zoom (e: any) {
            e.component.zoomArgument(300, 500)
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

If the **Chart** is [bound to the RangeSelector](/Documentation/Guide/Widgets/Chart/Zooming_and_Scrolling/#Using_the_RangeSelector_Widget), specify the initial zoom for the **Chart** by setting the [value](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#value) option of the **RangeSelector**.

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

    <!--HTML--><dx-chart ... ></dx-chart>
    <dx-range-selector ...
        [value]="[0, 10]">
    </dx-range-selector>

    <!--TypeScript-->
    import { DxChartModule, DxRangeSelectorModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
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