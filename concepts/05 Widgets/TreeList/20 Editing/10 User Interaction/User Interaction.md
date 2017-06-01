The **TreeList** widget allows a user to add, delete and update data. Assign *true* to the corresponding field of the [editing](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/) object to enable an operation. You can set a column's [allowEditing](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#allowEditing) option to *false* if its data should not be edited.

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            editing: {
                allowUpdating: true, 
                allowAdding: true, 
                allowDeleting: true 
            },
            columns: [
                { dataField: 'id', allowEditing: false },
                // ...
            ]
        });
    });

With the **TreeList** you can edit data in several modes. Use the **editing** | [mode](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#mode) option to specify it. 

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            editing: {
                mode: 'row',  // 'batch' | 'cell' | 'form' | 'popup'
            }
        });
    });

The following sections detail the **TreeList**'s appearance and behavior in each editing mode:
