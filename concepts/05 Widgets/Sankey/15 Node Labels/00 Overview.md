A label is an element that accompanies a [node](/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Overview/) and displays the node's title or custom data.

![Sankey - Node Labels](/Content/images/doc/19_2/Sankey/visual_elements/node_labels.png)

Options that configure node labels are collected in the [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/label/) object. Refer to its description in the API reference and to other articles in this section for information on node label settings.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#sankeyContainer").dxSankey({
            // ...
            label: {
                // Settings for all node labels
            }
        });
    });

##### Angular

    <!--HTML--><dx-sankey ... >
        <dxo-label ... >
            <!-- Settings for all node labels -->
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
- [Customize Labels](/Documentation/Guide/Widgets/Sankey/Node_Labels/Customize_Labels/)
- [Resolve Label Overlapping](/Documentation/Guide/Widgets/Sankey/Node_Labels/Resolve_Overlapping/)
- [Sankey API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/)
