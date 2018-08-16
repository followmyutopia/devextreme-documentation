Regardless of the data source you use, the **List** always wraps it in the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/). To get the instance of the **DataSource**, call the [getDataSource()](/Documentation/ApiReference/UI_Widgets/dxList/Methods/#getDataSource) method.

---
##### jQuery

    <!--JavaScript-->var listDataSource = $("#listContainer").dxList("getDataSource");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxListModule, DxListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxListComponent) list: DxListComponent;
        listDataSource: any = {};
        getDataSource () {
            this.listDataSource = this.dataGrid.instance.getDataSource();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })
    
---

Now, you can call [any method](/Documentation/ApiReference/Data_Layer/DataSource/Methods/) exposed by the **DataSource**. For example, you can reload data using the [load()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) method.

    <!--JavaScript-->listDataSource.load();

#####See Also#####
- [Data Layer - Overview](/Documentation/Guide/Data_Layer/Data_Layer/)
- [List Demos](/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/jQuery/Light/)
- [List API Reference](/Documentation/ApiReference/UI_Widgets/dxList/)

[tags]list, data binding, access data source, getDataSource, reload data