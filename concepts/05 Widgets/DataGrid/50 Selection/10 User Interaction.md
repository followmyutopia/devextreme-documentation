The **DataGrid** widget supports single and multiple row selection. Use the **selection**.[mode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#mode) option to change the current mode.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            selection: {
                mode: "single" // or "multiple" | "none"
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-selection
            mode="single"> <!-- "multiple" | "none" -->
        </dxo-selection>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
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

In the single mode, only one row can be selected at a time, while in the multiple mode, several rows can be selected with check boxes that appear in the selection column.


![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid Sorting](/Content/images/doc/19_2/DataGrid/selection.png)

The check box in the column's header selects all rows or only the currently rendered ones, depending on the [selectAllMode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#selectAllMode). Note that clicking this check box selects/deselects only those rows that meet filtering conditions if a filter is applied.

---

##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            selection: {
                mode: "multiple",
                selectAllMode: "page" // or "allPages"
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-selection
            mode="multiple"
            selectAllMode="page">   <!-- or "allPages" -->
        </dxo-selection>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
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

You can prevent users from selecting all rows by setting the **selection**.[allowSelectAll](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#allowSelectAll) option to **false**.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            selection: {
                mode: "multiple",
                allowSelectAll: false
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-selection
            mode="multiple"
            [allowSelectAll]="false">
        </dxo-selection>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
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

The [showCheckBoxesMode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#showCheckBoxesMode) option specifies when the widget renders check boxes in the selection column. For example, the following code tells the widget to never render them, though a user can still select rows using [keyboard shortcuts](/Documentation/Guide/Widgets/DataGrid/Keyboard_Support/):

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            selection: {
                mode: "multiple",
                showCheckBoxesMode: "none"    // or "onClick" | "onLongTap" | "always" 
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-selection
            mode="multiple"
            showCheckBoxesMode="none">    <!-- or "onClick" | "onLongTap" | "always" -->
        </dxo-selection>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
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

<a href="/Demos/WidgetsGallery/Demo/DataGrid/RowSelection/jQuery/Light/" class="button orange small fix-width-155" target="_blank">Single Selection Demo</a>
<a href="/Demos/WidgetsGallery/Demo/DataGrid/MultipleRecordSelectionModes/jQuery/Light/" class="button orange small fix-width-155" target="_blank">Multiple Selection Demo</a>

#####See Also#####
- [remoteOperations](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/)
- [Deferred Selection](/Documentation/Guide/Widgets/DataGrid/Enhance_Performance_on_Large_Datasets/#Deferred_Selection)
