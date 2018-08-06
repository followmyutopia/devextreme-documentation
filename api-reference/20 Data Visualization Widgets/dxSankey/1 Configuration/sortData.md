===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies nodes' sorting order.
<!--/shortDescription-->

<!--fullDescription-->
The sorting order depends on the node's weight: the heaviest nodes are displayed at the bottom; the lightest - at the top. All nodes have the same weight initially (equals 1).

In the following code, the `New Zealand` node is displayed at the bottom; the `Australia` - at the top; the `Japan` - in the middle:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#sankeyContainer").dxSankey({
            dataSource: [
                { source: "Australia", target: "Portugal", weight: 5 },
                { source: "New Zealand", target: "Portugal", weight: 1 },
                { source: "Japan", target: "Senegal", weight: 3 }
            ],
            sortData: { "Australia": 1, "New Zealand": 3, "Japan": 2 }
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxSankeyModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        data: Array<{ source: string, target: string, weight: number }> = [
            { source: "Australia", target: "Portugal", weight: 5 },
            { source: "New Zealand", target: "Portugal", weight: 1 },
            { source: "Japan", target: "Senegal", weight: 3 }
        ];
        sortData = { "Australia": 1, "New Zealand": 3, "Japan": 2 };
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-sankey
        [dataSource]="data"
        [sortData]="sortData">
    </dx-sankey>

---

<!--/fullDescription-->