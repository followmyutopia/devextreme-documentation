Editing buttons' visibility depends on the allowed editing capabilities. For example, the **Delete** button is visible if users can delete rows. You can configure the editing capabilities in the [editing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/) object. 

The **Edit** and **Delete** buttons can be hidden by omitting them when declaring the [buttons](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/buttons/) array. However, users can still use the keyboard to edit and delete.

---
##### jQuery  

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            editing: {
                allowUpdating: true,
                allowDeleting: true
            },
            columns: [{
                type: "buttons",
                buttons: ["edit"] // The Delete button is hidden
            }]
        });
    });

##### Angular  

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-editing
            [allowUpdating]="true"
            [allowDeleting]="true">
        </dxo-editing>
        <dxi-column type="buttons">
            <dxi-button name="edit"></dxi-button>
        </dxi-column>
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

You can hide an editing button or disable editing capabilities for specific rows. Use functions to specify the button's [visible](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/buttons/#visible) option or the **editing**.[allowUpdating](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#allowUpdating)/[allowDeleting](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#allowDeleting) option. Refer to the options' descriptions for examples.