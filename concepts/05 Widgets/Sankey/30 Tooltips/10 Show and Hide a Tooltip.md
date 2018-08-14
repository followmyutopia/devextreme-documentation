Tooltips can be invoked programmatically by calling a [Node](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Node/) or [Link](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Link/) object's **showTooltip()** method. You can access these objects [with API methods](/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Access_a_Node_or_Link_Using_the_API/) or in event handlers, such as [onNodeClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#onNodeClick) and [onLinkClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#onLinkClick), [onNodeHoverChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#onNodeHoverChanged) and [onLinkHoverChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#onLinkHoverChanged). The event handlers are demonstrated in the following code. To hide the tooltip, call the widget instance's **hideTooltip()** method.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#sankeyContainer").dxSankey({
            // ...
            tooltip: { enabled: false },
            // Shows the tooltip only when a sankey link is clicked
            onLinkClick: function(e) {
                e.target.showTooltip();
            },
            // Hides the tooltip when the sankey link is no longer hovered over or pressed
            onLinkHoverChanged: function(e) {
                if (!e.target.isHovered()) {
                    e.component.hideTooltip();
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-sankey ...
        (onItemClick)="sankey_onLinkClick($event)"
        (onHoverChanged)="sankey_onLinkHoverChanged($event)">
        <dxo-tooltip
            [enabled]="false">
        </dxo-tooltip>
    </dx-sankey>

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // Shows the tooltip only when a sankey link is clicked
        sankey_onLinkClick (e) {
            e.target.showTooltip();
        },
        // Hides the tooltip when the sankey link is no longer hovered over or pressed
        sankey_onLinkHoverChanged (e) {
            if (!e.target.isHovered()) {
                e.component.hideTooltip();
            }
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