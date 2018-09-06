All node labels are colored according to the **label**.**font**.[color](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/label/font/#color) option. However, you can color labels like their parent nodes if you set the **label**.[useNodeColors](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/label/#useNodeColors) option to **true**. Refer to [this article](/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Colorize_Nodes_and_Links/) for information on node colorization.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#sankeyContainer").dxSankey({
            // ...
            label: {
                useNodeColors: true
            }
        });
    });

##### Angular

    <!--HTML--><dx-sankey ... >
        <dxi-series>
            <dxo-label
                [useNodeColors]="true">
            </dxo-label>
        </dxi-series>
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
- [Colorize Nodes and Links](/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Colorize_Nodes_and_Links/)
- [Customize Labels](/Documentation/Guide/Widgets/Sankey/Node_Labels/Customize_Labels/)
- [Sankey API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/)
