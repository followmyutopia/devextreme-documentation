The popup mode is the [form mode](/Documentation/Guide/Widgets/DataGrid/Editing/#User_Interaction/Form_Mode) with the form placed in a popup window.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid Editing Popup Mode](/Content/images/doc/18_1/DataGrid/editing/popup_mode.png)

Use the **editing**.[popup](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#popup) object to customize the popup window. Refer to the [Popup Configuration](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/) section to learn which fields this object can contain.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            editing: {
                allowUpdating: true,
                mode: "popup",
                form: {
                    labelLocation: "top"
                },
                popup: {
                    showTitle: true,
                    title: "Row in the editing state"
                }
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-editing
            [allowUpdating]="true"
            mode="popup">
            <dxo-form labelLocation="top"></dxo-form>
            <dxo-popup [showTitle]="true" title="Row in the editing state"></dxo-popup>
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

Since the popup and form modes are very similar, you can use the same **columns**.[formItem](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#formItem) and **editing**.[form](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#form) options to customize items and layout in both modes. See the [Form Mode](/Documentation/Guide/Widgets/DataGrid/Editing/#User_Interaction/Form_Mode) topic for more details on form customization.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/DataGrid/PopupEditing/jQuery/Light/"
}
