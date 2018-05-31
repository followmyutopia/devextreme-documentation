A user expands or collapses a group row by clicking its expand/collapse button. 

![DevExtreme HTML5 JavaScript jQuery Knockout Angular DataGrid Grouping Expanded and Collapsed Rows](/Content/images/doc/18_2/DataGrid/GroupsExpandedCollapsed.png)

Set the **grouping**.[expandMode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#expandMode) option to *"rowClick"* to allow a user to expand or collapse a group row by clicking it as it could be difficult to press this button on small-screen devices.

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            grouping: {
                // ...
                expandMode: "rowClick"  // or "buttonClick"
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ...>
        <dxo-grouping ...
            expandMode="rowClick">  <!-- or "buttonClick" -->
        </dxo-grouping>
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

You can prevent a user from expanding and collapsing groups by assigning **false** to the **grouping**.[allowCollapsing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#allowCollapsing) option. After that, you can expand and collapse groups only [programmatically](/Documentation/Guide/Widgets/DataGrid/Grouping/#API/Expand_and_Collapse_Groups).

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            grouping: {
                // ...
                allowCollapsing: false
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ...>
        <dxo-grouping ...
            [autoExpandAll]="true"
            [allowCollapsing]="false">
        </dxo-grouping>
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
