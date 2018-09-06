The **Sankey**'s algorithm distributes nodes between columns. This distribution ensures a proper node-to-node flow direction. You cannot move nodes from one column to another because this alters the flow direction.

However, you can sort nodes within a column. Configure the [sortData](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#sortData) object so that its fields correspond to nodes. The field values should be node weights: the heavier the node, the lower it is in its column. Refer to the **sortData** description for an example.

Nodes in a column are separated by a space. You can use the **node**.[padding](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/node/#padding) option to specify this space. In the following code, this distance is reduced to 1 pixel:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#sankeyContainer").dxSankey({
            // ...
            node: {
                padding: 1
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-sankey ... >
        <dxo-node [padding]="1"></dxo-node>
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

Each column can be aligned vertically. You can find an example in the [alignment](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#alignment) option's description.

#####See Also#####
- [Colorize Nodes and Links](/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Colorize_Nodes_and_Links/)
