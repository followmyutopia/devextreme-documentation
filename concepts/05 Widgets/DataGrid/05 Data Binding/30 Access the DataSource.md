Regardless of the data source you use, the **DataGrid** always wraps it in the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/). To get a **DataSource** instance, call the [getDataSource()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getDataSource) method.

---
##### jQuery

    <!--JavaScript-->
    var ds = $("#dataGridContainer").dxDataGrid("getDataSource");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        ds: any = {};
        getDataSource () {
            this.ds = this.dataGrid.instance.getDataSource();
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

You can now call [any method](/Documentation/ApiReference/Data_Layer/DataSource/Methods/) exposed by the **DataSource**. For example, you can reload data using the [reload()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#reload) method.

    <!--JavaScript-->
    ds.reload();

#####See Also#####
- [Data Layer - Overview](/Documentation/Guide/Data_Layer/Data_Layer/)
- [DataGrid Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/LocalDataSource/jQuery/Light/)

[tags]dataGrid, data grid, data binding, access data source, getDataSource, reload data
