In the **Sankey** widget, nodes represent objects in a system. Nodes have weights and are connected using links that illustrate the weight flow between nodes. The links' width is proportional to the flow magnitude.

![Sankey Nodes and Links](/Content/images/doc/19_2/sankey/visual_elements/nodes-and-links.png)

Nodes get data from the [source](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#sourceField) and [target](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#targetField) data fields; links get data from the [weight](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#weightField) data field.

To configure the elements' appearance, use the [node](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/node/) and [link](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/link/) objects. In the following code, nodes are made half-opaque, and the links' border is made visible:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#sankeyContainer").dxSankey({
            // ...
            node: {
                opacity: 0.5
            },
            link: {
                border: {
                    visible: true
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-sankey ... >
        <dxo-node [opacity]="0.5"></dxo-node>
        <dxo-link>
            <dxo-border [visible]="true"></dxo-border>
        </dxo-link>
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

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/SankeyChart/jQuery/Light/"
}

#####See Also#####
- [Colorize Nodes and Links](/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Colorize_Nodes_and_Links/)
- [Rearrange Nodes](/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Rearrange_Nodes/)