Node labels can overlap when the **Sankey** contains many nodes. You can specify the **label**.[overlappingBehavior](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/label/#overlappingBehavior) option to resolve overlapping: you can hide overlapping labels, truncate them with ellipsis, or leave them overlapped:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#sankeyContainer").dxSankey({
            // ...
            label: {
                overlappingBehavior: "ellipsis" // or "hide" | "none"
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-sankey ... >
        <dxo-label
            overlappingBehavior="ellipsis"> <!-- or "hide" | "none" -->
        </dxo-label>
    </dx-sankey>

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

---

#####See Also#####
- [Sankey API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/)
