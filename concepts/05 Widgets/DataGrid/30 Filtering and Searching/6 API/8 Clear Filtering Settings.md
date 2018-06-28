Use the [clearFilter(filterName)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#clearFilterfilterName) method to clear filtering settings. You can call it with one of the following parameters:

- *"row"*       
Clears the [filter row](/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#Filter_Row).
- *"header"*        
Clears the [header filter](/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#Header_Filter).
- *"search"*        
Clears the [search panel](/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#Search_Panel).
- *"dataSource"*        
Clears the data source filter defined [in the configuration](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter) or applied by the [filter(filterExpr)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#filterfilterExpr) method.
- *Without any parameter*         
Clears all filters.

<!---->

---
##### jQuery

    <!--JavaScript-->// Clears the search panel
    $("#dataGridContainer").dxDataGrid("clearFilter", "search");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        clearSearchPanel () {
            this.dataGrid.instance.clearFilter("search");
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

#####See Also#####
- [remoteOperations](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/)
