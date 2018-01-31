The search panel allows searching for values in several columns at once. Search is case-insensitive.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid SearchPanel](/Content/images/doc/18_1/DataGrid/visual_elements/search_panel.png)

To make the search panel visible, assign **true** to the [searchPanel](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterRow/).**visible** option. You can set a column's [allowSearch](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowSearch) option to **false** if it should be excluded from searching. Note that this option inherits the value of the [allowFiltering](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowFiltering) option by default.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            searchPanel: { visible: true },
            columns: [{
                // ...
                allowSearch: false
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-search-panel [visible]="true"></dxo-search-panel>
        <dxi-column [allowSearch]="false" ... ></dxi-column>
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

Search is performed differently depending on a column's [data type](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataType). Numeric, Boolean, and date columns require that a user enters a full value into the search panel. For columns that contain string values, entering only a part of a value is enough to find it.

#####See Also#####
- [Filtering API - Initial and Runtime Filtering](/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#API/Initial_and_Runtime_Filtering)
- [DataGrid Demos](/Demos/WidgetsGallery/Demo/DataGrid/Filtering/jQuery/Light/)
