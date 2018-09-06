Call the [getAllNodes()](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Methods/#getAllNodes) method to access all nodes. It returns a collection of [Node](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Node/) objects. Similarly, you can call the [getAllLinks()](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Methods/#getAllLinks) method to get a collection of [Link](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Link/) objects:

---
##### jQuery

    <!--JavaScript-->
    var sankey = $("#sankeyContainer").dxSankey("instance");
    var sankeyNodes = sankey.getAllNodes();
    var sankeyLinks = sankey.getAllLinks();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxSankeyModule, DxSankeyComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxSankeyComponent) sankey: DxSankeyComponent;
        sankeyNodes: Array<any>;
        sankeyLinks: Array<any>;
        getSankeyNodes() {
            this.sankeyNodes = this.sankey.instance.getAllNodes();
        }
        getSankeyLinks() {
            this.sankeyLinks = this.sankey.instance.getAllLinks();
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

You can also access a node or link in the event handlers. For example, the [onNodeClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#onNodeClick) event handler gets the clicked node in the argument:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#sankeyContainer").dxSankey({
            // ...
            onNodeClick: function(e) {
                var node = e.target;
                // ...
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-sankey ...
        (onNodeClick)="sankey_onNodeClick($event)">
    </dx-sankey>

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        sankey_onNodeClick(e) {
            let node = e.target;
            // ...
        };
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
#include common-link-callmethods