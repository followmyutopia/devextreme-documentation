The **DataGrid** caches data by default. This allows the widget to decrease the loading time when a user sorts and filters data or expands a row the second time. To update data in cache, call the [refresh()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#refresh) method of the widget or the [load()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) method of the **DataSource**.

---
##### jQuery

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("refresh");
    // ===== or =====
    var dataGridDataSource = $("#dataGridContainer").dxDataGrid("getDataSource");
    dataGridDataSource.load();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        refreshData () {
            this.dataGrid.instance.refresh();
            // ===== or =====
            let dataGridDataSource = this.dataGrid.instance.getDataSource();
            dataGridDataSource.load();
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

[note]When data processing operations are [delegated to the server](/Documentation/Guide/Widgets/DataGrid/Data_Binding/Custom_Sources/), data is loaded every time these operations are performed even if caching is enabled. 

If your data source changes frequently, disable caching by assigning **false** to the **cacheEnabled** option. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({ 
            // ...
            cacheEnabled: false
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ...
        [cacheEnabled]="false">
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

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Calling_Methods)
- [DataGrid - Access the DataSource](/Documentation/Guide/Widgets/DataGrid/Data_Binding/Access_the_DataSource/)
- [DataGrid Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/LocalDataSource/jQuery/Light/)

[tags] dataGrid, data grid, caching, cache, enable caching, cacheEnabled