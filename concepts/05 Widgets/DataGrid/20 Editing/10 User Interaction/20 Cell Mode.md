In the cell mode, a user edits data cell by cell. Changes are saved once a cell loses the focus, or discarded if a user presses Esc. An added row is saved only when the focus is shifted from it. Choose this mode if any changes should be saved to the data source immediately.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid Editing Cell Mode](/Content/images/doc/18_1/DataGrid/editing/cell_mode.png)

If you [validate data](/Documentation/Guide/Widgets/DataGrid/Editing/#Data_Validation), a cell is locked in the editing state until a user enters a valid value or clicks the *"Cancel Changes"* button.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid Editing Cell Mode Validation](/Content/images/doc/18_1/DataGrid/editing/cell_mode_validation.png)

Clicking a *"Delete"* button invokes the confirmation dialog that allows a user to cancel row deletion. Use the code below to hide this dialog.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            editing: {
                mode: 'cell', 
                texts: {
                    confirmDeleteMessage: null
                }
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-editing mode="cell" [allowDeleting]="true">
            <dxo-texts [confirmDeleteMessage]="null"></dxo-texts>
        </dxo-editing>
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


#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/DataGrid/CellEditingAndEditingAPI/jQuery/Light/"
}
