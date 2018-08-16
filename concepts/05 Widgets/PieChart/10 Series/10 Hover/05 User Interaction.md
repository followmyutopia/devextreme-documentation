A series point's style changes when a user hovers the mouse pointer over it.  The **series**.[hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/hoverStyle/) object specifies this style.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            series: {
                hoverStyle: {
                    // ...
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart>
        <dxi-series>
            <dxo-hover-style>
                <!-- ... -->
            </dxo-hover-style>
        </dxi-series>
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

---

You can disable this feature by assigning *"none"* to the **series**.[hoverMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/#hoverMode) option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            series: {
                hoverMode: "none"
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart>
        <dxi-series
            hoverMode="none">
        </dxi-series>
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

---
