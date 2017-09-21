Regardless of the data source you use, the **TreeList** always wraps it in the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/). To get a **DataSource** instance, call the [getDataSource()](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#getDataSource) method.

---
##### jQuery

    <!--JavaScript-->
    var ds = $("#treeListContainer").dxTreeList("getDataSource");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxTreeListModule, DxTreeListComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        ds: any = {};
        getDataSource () {
            this.ds = this.treeList.instance.getDataSource();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---

You can now call [any method](/Documentation/ApiReference/Data_Layer/DataSource/Methods/) exposed by the **DataSource**. For example, you can reload data using the [reload()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#reload) method.

    <!--JavaScript-->
    ds.reload();

#####See Also#####
- [Data Layer - Overview](/Documentation/Guide/Data_Layer/Data_Layer/)
- [TreeList Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/LocalDataPlainStructure/jQuery/Light/)
- [TreeList API Reference](/Documentation/ApiReference/UI_Widgets/dxTreeList/)

[tags]treeList, data binding, access data source, getDataSource, reload data
