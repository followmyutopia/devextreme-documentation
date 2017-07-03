The [columns](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/) array determines columns' order. You can reorder columns by moving their objects within the array or by changing the column's [visibleIndex](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#visibleIndex) if you prefer to configure columns using the [customizeColumns](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#customizeColumns) function.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            customizeColumns: function(columns) {
                column[2].visibleIndex = 1;
            }
        });
    });

##### Angular
    
    <!--TypeScript-->
    export class AppComponent {
        customizeColumns (columns) {
            column[2].visibleIndex = 1;
        }
    }

    <!--HTML-->
    <dx-tree-list ...
        [customizeColumns]="customizeColumns">
    </dx-tree-list>
    
---

The **visibleIndex** option can also be changed at runtime to reorder columns regardless of the way you configured them. For this, call the [columnOption(id, optionName, optionValue)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#columnOptionid_optionName_optionValue) method. The following code swaps the second and first column:

---
##### jQuery

    <!--JavaScript-->
    $("#treeListContainer").dxTreeList("columnOption", 1, "visibleIndex", 0);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxTreeListModule, DxTreeListComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        swapColumns () {
            this.treeList.instance.columnOption(1, "visibleIndex", 0);
        }
    }
    
---

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/)
- [Data Columns](/Documentation/Guide/Widgets/TreeList/Columns/Column_Types/Data_Columns/)
