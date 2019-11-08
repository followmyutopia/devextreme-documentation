In the **Sankey** widget, nodes represent objects in a system. Nodes have weights and are connected using links that illustrate the weight flow between nodes. The links' width is proportional to the flow magnitude.

![Sankey Nodes and Links](/images/sankey/visual_elements/nodes-and-links.png)

Nodes get data from the [source](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/sourceField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#sourceField') and [target](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/targetField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#targetField') data fields; links get data from the [weight](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/weightField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#weightField') data field.

To configure the elements' appearance, use the [node](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/node/node.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/node/') and [link](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/link/link.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/link/') objects. In the following code, nodes are made half-opaque, and the links' border is made visible:

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
    url: "/Demos/WidgetsGallery/Demo/Charts/SankeyChart/"
}

#####See Also#####
- [Colorize Nodes and Links](/concepts/05%20Widgets/Sankey/05%20Nodes%20and%20Links/05%20Colorize%20Nodes%20and%20Links.md '/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Colorize_Nodes_and_Links/')
- [Rearrange Nodes](/concepts/05%20Widgets/Sankey/05%20Nodes%20and%20Links/08%20Rearrange%20Nodes.md '/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Rearrange_Nodes/')