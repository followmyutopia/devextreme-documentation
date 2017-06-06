In the cell mode, a user edits data cell by cell. Changes are saved once a cell loses the focus, or discarded if a user presses Esc. An added row is saved only when the focus is shifted from it. Choose this mode if any changes should be saved to the data source immediately.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList Editing Cell Mode](/Content/images/doc/17_2/treelist/editing/cell_mode.png)

If you [validate data](/Documentation/Guide/Widgets/TreeList/Editing/#Data_Validation), a cell is locked in the editing state until a user enters a valid value or clicks the *"Cancel Changes"* button.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList Editing Cell Mode Validation](/Content/images/doc/17_2/treelist/editing/cell_mode_validation.png)

Clicking a *"Delete"* button invokes the confirmation dialog that allows a user to cancel row deletion. Use the code below to hide this dialog.

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            editing: {
                mode: 'cell', 
                texts: {
                    confirmDeleteMessage: null
                }
            }
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/CellEditing/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>
