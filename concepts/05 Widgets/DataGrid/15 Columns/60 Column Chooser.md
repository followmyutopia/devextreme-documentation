The column chooser allows a user to change the set of columns at runtime. It is configured using the [columnChooser](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnChooser/) object and may operate in two [modes](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnChooser/#mode): the default drag-and-drop mode and the select mode designed for touch devices.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            columnChooser: {
                enabled: true,
                mode: "dragAndDrop" // or "select"
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-column-chooser
            [enabled]="true"
            mode="dragAndDrop"> <!-- or "select" -->
        </dxo-column-chooser>
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

<img src="/Content/images/doc/18_1/DataGrid/visual_elements/column-chooser_draganddrop-mode.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid ColumnChooser" style="margin-right:60px" /> <img src="/Content/images/doc/18_1/DataGrid/visual_elements/column-chooser_select-mode.png" alt="DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid ColumnChooser" style="margin-right:90px" />

Set a column's [allowHiding](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowHiding) option to **false** if it should never be hidden. For columns whose headers should never appear in the column chooser, set the [showInColumnChooser](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#showInColumnChooser) option to **false**.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            columnChooser: { enabled: true },
            columns: [{
                // ...
                allowHiding: false // cannot be hidden
            }, {
                // ...
                showInColumnChooser: false // does not appear in the column chooser even when hidden
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-column-chooser [enabled]="true"></dxo-column-chooser>
        <dxi-column ...
            [allowHiding]="false"> <!-- cannot be hidden -->
        </dxi-column>
        <dxi-column ...
            [showInColumnChooser]="false"> <!-- does not appear in the column chooser even when hidden -->
        </dxi-column>
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

Call the [showColumnChooser()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#showColumnChooser) or [hideColumnChooser()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#hideColumnChooser) method to control the column chooser programmatically.

---
##### jQuery

    <!--JavaScript-->
    var dataGrid = $("#dataGridContainer").dxDataGrid("instance");
    dataGrid.showColumnChooser();
    dataGrid.hideColumnChooser();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        showColumnChooser () {
            this.dataGrid.instance.showColumnChooser();
        };
        hideColumnChooser () {
            this.dataGrid.instance.hideColumnChooser();
        };
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
- [Hide a Column Using the API](/Documentation/Guide/Widgets/DataGrid/Columns/Hide_a_Column_Using_the_API/)
- [Adaptability](/Documentation/Guide/Widgets/DataGrid/Columns/Adaptability/)
- [Column Fixing](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Fixing/)