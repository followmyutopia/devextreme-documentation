A label is an element that accompanies a [node](/concepts/05%20Widgets/Sankey/05%20Nodes%20and%20Links/00%20Overview.md '/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Overview/') and displays the node's title or custom data.

![Sankey - Node Labels](/images/Sankey/visual_elements/node_labels.png)

Options that configure node labels are collected in the [label](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/label/label.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/label/') object. Refer to its description in the API reference and to other articles in this section for information on node label settings.

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
- [Customize Labels](/concepts/05%20Widgets/Sankey/15%20Node%20Labels/05%20Customize%20Labels.md '/Documentation/Guide/Widgets/Sankey/Node_Labels/Customize_Labels/')
- [Resolve Label Overlapping](/concepts/05%20Widgets/Sankey/15%20Node%20Labels/10%20Resolve%20Overlapping.md '/Documentation/Guide/Widgets/Sankey/Node_Labels/Resolve_Overlapping/')
- [Sankey API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/dxSankey.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/')
