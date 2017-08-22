The **TreeList** caches data by default. This allows the widget to decrease the loading time when a user sorts and filters data or expands a row the second time. To update data in cache, call the [refresh()](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#refresh) method of the widget or the [load()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) method of the **DataSource**.

---
##### jQuery

    <!--JavaScript-->
    $("#treeListContainer").dxTreeList("refresh");
    // ===== or =====
    var treeListDataSource = $("#treeListContainer").dxTreeList("getDataSource");
    treeListDataSource.load();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxTreeListModule, DxTreeListComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        refreshData () {
            this.treeList.instance.refresh();
            // ===== or =====
            let treeListDataSource = this.treeList.instance.getDataSource();
            treeListDataSource.load();
        }
    }
    
---

[note]When data processing operations are [delegated to the server](/Documentation/Guide/Widgets/TreeList/Data_Binding/Custom_Sources/), data is loaded every time these operations are performed even if caching is enabled. 

If your data source changes frequently, disable caching by assigning **false** to the **cacheEnabled** option. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            cacheEnabled: false
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ...
        [cacheEnabled]="false">
    </dx-tree-list>
    
---

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/)
- [TreeList - Access the DataSource](/Documentation/Guide/Widgets/TreeList/Data_Binding/Access_the_DataSource/)
- [TreeList Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/LocalDataPlainStructure/jQuery/Light/)
- [TreeList API Reference](/Documentation/ApiReference/UI_Widgets/dxTreeList/)