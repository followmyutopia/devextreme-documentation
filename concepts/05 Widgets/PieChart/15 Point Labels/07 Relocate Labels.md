Labels are located beside their series points by default. Change the **series**.**label**.[position](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/#position) option to rearrange labels in columns or place them inside series points.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            series: {
                label: {
                    position: "columns" // or "inside" | "outside"
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-pie-chart ... >
        <dxi-series>
            <dxo-label
                position="columns"> <!-- or "inside" | "outside" -->
            </dxo-label>
        </dxi-series>
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from 'devextreme-angular';
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
    url: "/Demos/WidgetsGallery/Demo/Charts/PieWithCustomLabels/jQuery/Light/"
}

#####See Also#####
- [Resolve Label Overlapping](/Documentation/Guide/Widgets/PieChart/Point_Labels/Resolve_Overlapping/)