A summary item is under the [column providing data](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#column) and has the same alignment as this column's data cells by default. Use the [showInColumn](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#showInColumn) and [alignment](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#alignment) options to change the default values. 

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            summary: {
                totalItems: [{
                    column: "Amount",
                    summaryType: "avg",
                    showInColumn: "StoreCity",
                    alignment: "center"     // or "left" | "right"
                }, 
                // ...
                ]
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-summary>
            <dxi-total-item
                column="Amount"
                summaryType="avg"
                showInColumn="StoreCity"
                alignment="center">     <!-- or "left" | "right" -->
            </dxi-total-item>
        </dxo-summary>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
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
