The columns's [dataType](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataType) defines a cell's editor, which can be configured using the [editorOptions](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#editorOptions) object. You cannot change the editor's type or **onValueChanged** event handler using this object. Implement the [onEditorPreparing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onEditorPreparing) function if you do need to change them.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: "Note",
                editorOptions: {
                    minHeight: 200
                }
            }, // ...
            ],
            onEditorPreparing: function(e) {
                if (e.dataField == "Name") {
                    // Changes the editor's type
                    e.editorName = "dxTextArea";
                    e.editorOptions.onValueChanged = function (e) {
                        // Implement your logic here

                        // Updates the cell value
                        e.setValue(value);
                    }
                }
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ...
        (onEditorPreparing)="onEditorPreparing($event)">
        <dxi-column
            dataField="Note"
            [editorOptions]="{ minHeight: 200 }">
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    export class AppComponent {
        onEditorPreparing (e) {
            if (e.dataField == "Name") {
                // Changes the editor's type
                e.editorName = "dxTextArea";
                e.editorOptions.onValueChanged = function (e) {
                    // Implement your logic here

                    // Updates the cell value
                    e.setValue(value);
                }
            }
        }
    }
    
---

Implement the **columns[]**.[editCellTemplate](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#editCellTemplate) function for more extensive customization, in which you should specify your custom component's appearance and behavior in full. The following code uses this function to substitute an HTML check box for a default editor:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: "Hidden",
                editCellTemplate: function(cellElement, cellInfo) {
                    $('<input type="checkbox">')
                        .prop("checked", cellInfo.value)
                        .prop("disabled", cellInfo.setValue ? null : "disabled")
                        .on("change", function(args) {
                            cellInfo.setValue(args.target.checked);
                        })
                        .appendTo(cellElement);
                }
            },
            // ...
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column dataField="Hidden" editCellTemplate="editCellTemplate"></dxi-column>
        <div *dxTemplate="let cellInfo of 'editCellTemplate'">
            <input type="checkbox"
                [checked]="cellInfo.value"
                (change)="setCheckBoxValue($event, cellInfo)"
                [attr.disabled]="cellInfo.setValue ? null : 'disabled'" />
        </div>
    </dx-data-grid>

    <!--TypeScript-->
    export class AppComponent {
        setCheckBoxValue (args, cellInfo) {
            cellInfo.setValue(args.target.checked);
        }
    }
    
---

Editors are displayed in cells in the normal state too if you set the **columns**.[showEditorAlways](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#showEditorAlways) option to **true**.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: "Hidden",
                dataType: "boolean",
                showEditorAlways: true
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column
            dataField="Hidden"
            dataType="boolean"
            [showEditorAlways]="true">
        </dxi-column>
    </dx-data-grid>
    
---

#####See Also#####
- [Columns - Customize Cells](/Documentation/Guide/Widgets/DataGrid/Columns/Customize_Cells/)
