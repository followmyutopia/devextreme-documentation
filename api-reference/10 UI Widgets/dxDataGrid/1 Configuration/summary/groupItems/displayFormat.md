---
id: dxDataGrid.Options.summary.groupItems.displayFormat
type: String
default: undefined
---
---
##### shortDescription
Specifies the summary item's text.

---
You can use the following position markers in this text: 

- {0} - [formatted](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#valueFormat) summary value.
- {1} - the parent column's [caption](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#caption). Available if the [showInColumn](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#showInColumn) option is specified.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            summary: {
                groupItems: [{
                    column: "SaleAmount",
                    summaryType: "sum",
                    showInColumn: "TotalAmount",
                    valueFormat: "currency",
                    displayFormat: "Column: {1}. Sales: {0}" // for example, "Column: Total Amount. Sales: $1234"
                },
                // ...
                ]
            }
        });
    });

#####Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxo-summary>
            <dxi-group-item
                column="SaleAmount"
                summaryType="sum"
                showInColumn="TotalAmount"
                valueFormat="currency"
                displayFormat="Column: {1}. Sales: {0}"> <!-- for example, "Column: Total Amount. Sales: $1234" -->
            </dxi-group-item>
        </dxo-summary>
    </dx-data-grid>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxDataGridModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxDataGridModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

#####Vue

    <!-- tab: App.vue -->
    <template> 
        <dx-data-grid ... >
            <dx-summary>
                <dx-group-item
                    column="SaleAmount"
                    summary-type="sum"
                    show-in-column="TotalAmount"
                    value-format="currency" 
                    display-format="Column: {1}. Sales: {0}" /> <!-- for example, "Column: Total Amount. Sales: $1234" -->
            </dx-summary>
        </dx-data-grid>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, { DxSummary, DxGroupItem } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxSummary,
            DxGroupItem
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    import { DataGrid, Summary, GroupItem } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid>
                    <Summary
                        <GroupItem 
                            column="SaleAmount" 
                            summaryType="sum" 
                            showInColumn="TotalAmount" 
                            valueFormat="currency" 
                            displayFormat="Column: {1}. Sales: {0}" /> <!-- for example, "Column: Total Amount. Sales: $1234" -->
                    </Summary>
                </DataGrid>
            );
        }
    }
    export default App;
    
---

Use the [customizeText](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#customizeText) option for more advanced text customizations.