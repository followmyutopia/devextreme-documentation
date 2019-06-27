The search panel allows searching for values in several columns at once. Search is case-insensitive.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid SearchPanel](/Content/images/doc/19_2/DataGrid/visual_elements/search_panel.png)

To make the search panel visible, assign **true** to the [searchPanel](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/).**visible** option. You can set a column's [allowSearch](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowSearch) option to **false** if it should be excluded from searching. Note that this option inherits the [allowFiltering](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowFiltering) option's value by default.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
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

Use the **searchPanel**.[text](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/#text) option to predefine the search value. You can also change it at runtime by calling the [searchByText(text)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#searchByTexttext) method:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            searchPanel: {
                visible: true,
                text: "4/1/2015"
            }
        });
    });

<!---->

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("searchByText", "1/29/2016");

##### Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-search-panel 
            [visible]="true" 
            [(text)]="searchText">
        </dxo-search-panel>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        searchText: string = "4/1/2015";
        setSearchValue (searchText) {
            this.searchText = searchText;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

---

Searching is performed differently depending on a column's [data type](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataType). Numeric, Boolean, and date columns require that a user enters a full value into the search panel. Searching columns containing string values and specifying the search value using the API requires entering only a part of a value.

#####See Also#####
- [Filtering API - Initial and Runtime Filtering](/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#API/Initial_and_Runtime_Filtering)
- [remoteOperations](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/)
- [DataGrid Demos](/Demos/WidgetsGallery/Demo/DataGrid/Filtering/jQuery/Light/)
