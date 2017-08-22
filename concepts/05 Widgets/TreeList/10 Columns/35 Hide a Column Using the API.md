A column is considered hidden when its [visible](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#visible) option is **false**. You can change this option programmatically using the [columnOption(id, optionName, optionValue)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#columnOptionid_optionName_optionValue) method. For example, the following code hides an *"Email"* column:

---
##### jQuery

    <!--JavaScript-->$("#treeListContainer").dxTreeList("columnOption", "Email", "visible", false);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxTreeListModule, DxTreeListComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        hideEmails() () {
            this.treeList.instance.columnOption("Email", "visible", false);
        }
    }
    
---

#####See Also#####
- [Column Chooser](/Documentation/Guide/Widgets/TreeList/Columns/Column_Chooser/)