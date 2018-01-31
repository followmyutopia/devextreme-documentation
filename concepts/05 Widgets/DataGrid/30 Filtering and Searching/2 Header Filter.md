A header filter allows a user to filter values in an individual column by including or excluding them from the applied filter. Clicking a header filter icon invokes a popup menu with all the column's unique values. A user includes or excludes values from the filter by selecting or clearing their selection in this menu.

![DevExtreme HTML5 JavaScript jQuery Knockout Angular DataGrid Filtering HeaderFilter](/Content/images/doc/18_1/DataGrid/visual_elements/header_filter.png)

Assign **true** to the [headerFilter](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/headerFilter/).**visible** option to make header filter icons visible for all columns. Set a column's [allowHeaderFiltering](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowHeaderFiltering) option to **false** if its header filter should not be available. Note that this option inherits the [allowFiltering](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowFiltering) option's value by default.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            headerFilter: { visible: true },
            columns: [{
                // ...
                allowHeaderFiltering: false
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-header-filter [visible]="true"></dxo-header-filter>
        <dxi-column [allowHeaderFiltering]="false" ... ></dxi-column>
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

A user can change the applied filter by including or excluding values to/from it. Use a column's [filterType](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#filterType) option to specify the required mode.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            columns: [{
                // ...
                filterType: "exclude" // or "include"
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column ...
            [filterType]="exclude"> <!-- or "include" -->
        </dxi-column>
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

The header filter provides a searching capability that you can enable using the **headerFilter**.[allowSearch](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/headerFilter/#allowSearch) option. The same option can be declared in a column's configuration object, in which case it controls searching in that column's header filter.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            headerFilter: { 
                visible: true,
                allowSearch: true
            },
            columns: [{
                // ...
                headerFilter: { 
                    allowSearch: false
                }
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-header-filter [visible]="true" [allowSearch]="true"></dxo-header-filter>
        <dxi-column ... >
            <dxo-header-filter [allowSearch]="false"></dxo-header-filter>
        </dxi-column>
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

A header filter's popup menu lists all column values by default. You can group them using the **headerFilter**.[groupInterval](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/headerFilter/#groupInterval) option if they are numbers or dates. You can also provide a custom data source for a header filter using the [dataSource](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/headerFilter/#dataSource) option. Refer to the option's description for details.

#####See Also#####
- [Filtering API - Initial and Runtime Filtering](/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#API/Initial_and_Runtime_Filtering)
- [DataGrid Demos](/Demos/WidgetsGallery/Demo/DataGrid/Filtering/jQuery/Light/)
