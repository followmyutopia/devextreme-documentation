Labels are arranged in a column by default. Change the **label**.[position](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/label/#position) option to display labels beside or inside funnel items.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            label: {
                position: "columns" // or "inside" | "outside"
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-funnel ... >
        <dxo-label
            position="columns"> <!-- or "inside" | "outside" -->
        </dxo-label>
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

---

#####See Also#####
- [Funnel Demos](/Demos/WidgetsGallery/Demo/Charts/FunnelChart/jQuery/Light/)