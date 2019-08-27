---
id: dxDataGrid.Options.summary.totalItems
type: Array<Object>
default: undefined
---
---
##### shortDescription
Specifies items of the total summary.

---
The total summary, which is located in the grid footer, provides a synopsis of all data contained in the grid. It contains several summary items. Each item displays a value that is a product of applying an aggregate function to the data of a specific column.

To specify the items of the total summary, declare an array of objects, each of which contains at least two fields: [column](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#column) and [summaryType](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#summaryType). The **column** field specifies the identifier of the column that provides data for an aggregate function. The **summaryType** specifies the aggregate function to be applied. The following code snippet shows how to declare two summary items.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            summary: {
                totalItems: [{
                    column: "Age",
                    summaryType: "avg"
                }, {
                    column: "LastName",
                    summaryType: "count"
                }]
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-summary>
            <dxi-total-item
                column="Age"
                summaryType="avg">
            </dxi-total-item>
            <dxi-total-item
                column="LastName"
                summaryType="count">
            </dxi-total-item>
        </dxo-summary>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

---

By default, a summary item is placed in the column that provides data for it. If you need to place it in another column, assign the identifier of this column to the [showInColumn](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#showInColumn) option.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/DataGrid/GridSummaries/jQuery/Light/"
}
<a href="https://www.youtube.com/watch?v=Ru43cnfrqGM&index=40&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [Total Summary](/Documentation/Guide/Widgets/DataGrid/Summaries/Total_Summary/)