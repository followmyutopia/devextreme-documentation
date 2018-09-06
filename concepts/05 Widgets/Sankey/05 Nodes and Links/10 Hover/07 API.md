To change a node or link's hover state, pass **true** or **false** to their [hover(state)](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Node/Methods/#hoverstate) method. You can call the [isHovered()](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Node/Methods/#isHovered) method to check the current state.

---
##### jQuery

    <!--JavaScript-->
    var toggleItemHoverState = function(item) {
        item.hover(!item.isHovered());
    }

##### Angular

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        toggleItemHoverState(item) {
            item.hover(!item.isHovered());
        }
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
- [Access a Node or Link Using the API](/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Access_a_Node_or_Link_Using_the_API/)
