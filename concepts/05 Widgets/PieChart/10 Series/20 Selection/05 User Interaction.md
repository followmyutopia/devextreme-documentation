When a user selects a series point, its style changes to the one specified by the **series**.[selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/selectionStyle/) object.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            series: {
                selectionStyle: {
                    // ...
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-pie-chart>
        <dxi-series>
            <dxo-selection-style>
                <!-- ...-->
            </dxo-selection-style>
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

You can disable the selection capability by settings the **series**.[selectionMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/#selectionMode) option to *"none"*.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            series: {
                selectionMode: "none"
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart>
        <dxi-series
            selectionMode="none">
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

Only a single point can be in the selected state at a time by default. If you need to allow multiple points to be in this state, assign *"multiple"* to the [pointSelectionMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#pointSelectionMode) option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            pointSelectionMode: 'multiple' // or 'single'
        });
    });

##### Angular

    <!--HTML-->
    <dx-pie-chart 
        pointSelectionMode="multiple"> <!-- or 'single' -->
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

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/DoughnutSelection/jQuery/Light/"
}
