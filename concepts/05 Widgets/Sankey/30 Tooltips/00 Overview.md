A tooltip is a small pop-up rectangle that displays information about a sankey node or link when it is hovered over or pressed.

![Sankey Tooltip](/Content/images/doc/18_2/Sankey/visual_elements/tooltip.png)

Options that configure tooltips are collected in the [tooltip](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/tooltip/) object. If you want to customize a specific tooltip, assign a function to the [customizeNodeTooltip](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/tooltip/#customizeNodeTooltip) or [customizeLinkTooltip](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/tooltip/#customizeLinkTooltip) option, depending on whether the tooltip belongs to a sankey node or link. This function should return a configuration object for the tooltip you want to customize.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#sankeyContainer").dxSankey({
            // ...
            tooltip: {
                color: "yellow",
                // Tooltips of all nodes with outgoing weight less than 1 turn red
                // Other tooltips remain yellow
                customizeNodeTooltip: function(nodeInfo) {
                    return nodeInfo.weightOut < 1 ? { color: "red" } : { }
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-sankey ... >
        <dxo-tooltip
            color="yellow"
            [customizeNodeTooltip]="sankey_customizeNodeTooltip">
        </dxo-tooltip>
    </dx-sankey>

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // Tooltips of all nodes with outgoing weight less than 1 turn red
        // Other tooltips remain yellow
        sankey_customizeNodeTooltip (nodeInfo) {
            return nodeInfo.weightOut < 1 ? { color: "red" } : { }
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

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/SankeyChart/jQuery/Light/"
}

#####See Also#####
- [Show and Hide a Tooltip](/Documentation/Guide/Widgets/Sankey/Tooltips/Show_and_Hide_a_Tooltip/)
