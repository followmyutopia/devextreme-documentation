The columns's [dataType](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#dataType) defines a cell's editor, which can be configured using the [editorOptions](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#editorOptions) object. You cannot change the editor's type or **onValueChanged** event handler using this object. Implement the [onEditorPreparing](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onEditorPreparing) function if you do need to change them.

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
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
                    e.editorOptions.onValueChanged = function(e) {
                        // Implement your logic here

                        // Updates a cell value
                        e.setValue(value);
                    }
                }
            }
        });
    });

Implement the **columns[]** | [editCellTemplate](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#editCellTemplate) function for more extensive customization, in which you should specify your custom component's appearance and behavior in full. The following code uses this function to substitute an HTML check box for a default editor:

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                dataField: "Hidden",
                editCellTemplate: function(cellElement, cellInfo) {
                    $('<input type="checkbox">')
                        .prop("checked", cellInfo.value)
                        .on("change", function(args) {
                            cellInfo.setValue(args.target.checked);
                        })
                        .appendTo(cellElement);
                }
            },
            // ...
        });
    });

Editors are displayed in cells in the normal state too if you set the **columns** | [showEditorAlways](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#showEditorAlways) option to *true*.

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                dataField: "Hidden",
                dataType: "boolean",
                showEditorAlways: true
            }]
        });
    });

#####See Also#####
- [Columns - Customize Cells](/Documentation/Guide/Widgets/TreeList/Columns/Customize_Cells/)
