Command columns are used for interaction. The **DataGrid** provides the following command columns.

- **Editing Column**        
Contains editing controls. Appears when [editing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/) is allowed and depends on the [editing mode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#mode).

- **Adaptive Column**       
Contains buttons that expand adaptive detail rows. Appears if [columnHidingEnabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#columnHidingEnabled) is **true** or [hidingPriority](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#hidingPriority) is set for at least one column and only when certain columns do not fit into the screen or container size.

- **Selection Column**    
Contains check boxes that select rows. Appears if **selection**.[mode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#mode) is *"multiple"* and [showCheckBoxesMode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#showCheckBoxesMode) differs from *"none"*.


![DevExtreme HTML5 JavaScript DataGrid CommandColumns EditingColumn AdaptiveColumn](/Content/images/doc/17_1/DataGrid/Command_Columns.png)

You can relocate or resize the command columns by changing their **visibleIndex** and **width** options. For this, call the [columnOption(id, optionName, optionValue)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#columnOptionid_optionName_optionValue) method as shown by the following code.

---
##### jQuery

    <!--JavaScript-->
    var dataGrid = $("#dataGridContainer").dxDataGrid("instance");

    // places the selection column after all columns
    dataGrid.columnOption("command:select", "visibleIndex", 999);

    // changes the width of the selection column to 50 pixels
    dataGrid.columnOption("command:select", "width", 50);

    // places the editing column before all others
    dataGrid.columnOption("command:edit", "visibleIndex", -2);

    // changes the width of the editing column to 200 pixels
    dataGrid.columnOption("command:edit", "width", 200);

    // places the adaptive column before all data columns, but after the editing column
    dataGrid.columnOption("command:adaptive", "visibleIndex", -1);

    // changes the width of the adaptive column to 80 pixels
    dataGrid.columnOption("command:adaptive", "width", 80);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        modifySelectionColumn () {
            // places the selection column after all columns
            this.dataGrid.instance.columnOption("command:select", "visibleIndex", 999);

            // changes the width of the selection column to 50 pixels
            this.dataGrid.instance.columnOption("command:select", "width", 50);
        }
        modifyEditingColumn () {
            // places the editing column before all others
            this.dataGrid.instance.columnOption("command:edit", "visibleIndex", -2);

            // changes the width of the editing column to 200 pixels
            this.dataGrid.instance.columnOption("command:edit", "width", 200);
        }
        modifyAdaptiveColumn () {
            // places the adaptive column before all data columns, but after the editing column
            this.dataGrid.instance.columnOption("command:adaptive", "visibleIndex", -1);

            // changes the width of the adaptive column to 80 pixels
            this.dataGrid.instance.columnOption("command:adaptive", "width", 80);
        }
    }
    
---

You can also customize cells of command columns using the [onCellPrepared](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onCellPrepared) function. To distinguish cells of a command column from others, check the argument's **column.command** field for the *"edit"*, *"adaptive"* or *"select"* value.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            onCellPrepared: function(e) {
                if (e.rowType == "data") {
                    var cell = e.cellElement;
                    switch (e.column.command) {
                        case "edit":
                            // ...
                            break;
                        case "adaptive":
                            // ...
                            break;
                        case "select";
                            // ...
                            break;
                    }
                }
            }
        });
    });

##### Angular

    <!--TypeScript-->
    export class AppComponent {
        onCellPrepared (e) {
            if (e.rowType == "data") {
                let cell = e.cellElement;
                switch (e.column.command) {
                    case "edit":
                        // ...
                        break;
                    case "adaptive":
                        // ...
                        break;
                    case "select";
                        // ...
                        break;
                }
            }
        };
    }

    <!--HTML-->
    <dx-data-grid ...
        (onCellPrepared)="onCellPrepared($event)">
    </dx-data-grid>
    
---

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CustomizeCommandColumns/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

[tags] dataGrid, data grid, column types, command columns, editing column, adaptive column, selection column
