All rows are collapsed by default. Assign an array of keys to the [expandedRowKeys](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#expandedRowKeys) option to expand specific rows initially. If a to-be-expanded row lies deep in the hierarchy, make sure to include keys of all its parent rows as well. Set the [autoExpandAll](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#autoExpandAll) option to **true** if all rows should be expanded initially.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            expandedRowKeys: [1, 5, 18],
            // autoExpandAll: true
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ...
        [expandedRowKeys]="[1, 5, 18]">
        <!-- autoExpandAll: true -->
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---

Call the [expandRow(key)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#expandRowkey) or [collapseRow(key)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#collapseRowkey) method to respectively expand or collapse a row at runtime. You can check a row's current state by calling the [isRowExpanded(key)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#isRowExpandedkey) method.

---
##### jQuery

    <!--JavaScript-->function toggleRow (key) {
        var treeList = $("#treeListContainer").dxTreeList("instance");
        if (treeList.isRowExpanded(key)) {
            treeList.collapseRow(key);
        } else {
            treeList.expandRow(key);
        }
    }

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxTreeListModule, DxTreeListComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        toggleRow (key) {
            if (this.treeList.instance.isRowExpanded(key)) {
                this.treeList.instance.collapseRow(key);
            } else {
                this.treeList.instance.expandRow(key);
            }
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

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Calling_Methods)
- [TreeList Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/LocalDataPlainStructure/jQuery/Light/)
