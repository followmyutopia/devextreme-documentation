A header filter allows a user to filter values in an individual column by including or excluding them from the applied filter. Clicking a header filter icon invokes a popup menu with all the column's unique values. A user includes or excludes values from the filter by selecting or clearing their selection in this menu.

![DevExtreme HTML5 JavaScript jQuery Knockout Angular DataGrid Filtering HeaderFilter](/Content/images/doc/19_2/DataGrid/visual_elements/header_filter.png)

Assign **true** to the [headerFilter](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/headerFilter/headerFilter.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/headerFilter/').**visible** option to make header filter icons visible for all columns. Set a column's [allowHeaderFiltering](/api-reference/_hidden/GridBaseColumn/allowHeaderFiltering.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowHeaderFiltering') option to **false** if its header filter should not be available. Note that this option inherits the [allowFiltering](/api-reference/_hidden/GridBaseColumn/allowFiltering.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowFiltering') option's value by default.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
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

A user can change the applied filter by including or excluding values. Use a column's [filterType](/api-reference/_hidden/GridBaseColumn/filterType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#filterType') option to specify the required mode. You can specify the initial filter by combining this option and the [filterValues](/api-reference/_hidden/GridBaseColumn/filterValues.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#filterValues') option. To change it at runtime, call the [columnOption](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#columnOptionid_options) method:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                // ...
                dataField: "OrderDate",
                filterType: "exclude", // or "include"
                filterValues: [2014]
            }]
        });
    });

<!---->

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("columnOption", "OrderDate", {
        filterType: "include",
        filterValues: [2014, 2015]
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column 
            dataField="OrderDate"
            [(filterValues)]="filterValues"
            [(filterType)]="filterType"> 
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        filterValues: Array<any> = [2014];
        filterType: string = "exclude";    // or "include"
        applyFilter (filterType, values) {
            this.filterType = filterType;
            this.filterValues = values;
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

#include datagrid-filtering-rowandheaderconflicts

You can use the **headerFilter.**[allowSearch](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/headerFilter/allowSearch.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/headerFilter/#allowSearch') option to enable searching in the header filter. You can also declare this option in a column's configuration object to enable/disable searching in this column's header filter.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
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

A header filter's popup menu lists all column values by default. You can group them using the **headerFilter**.[groupInterval](/api-reference/_hidden/GridBaseColumn/headerFilter/groupInterval.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/headerFilter/#groupInterval') option if they are numbers or dates. You can also provide a custom data source for a header filter using the [dataSource](/api-reference/_hidden/GridBaseColumn/headerFilter/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/headerFilter/#dataSource') option. Refer to the option's description for details.

#####See Also#####
- [Filtering API - Initial and Runtime Filtering](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/6%20API/1%20Initial%20and%20Runtime%20Filtering.md '/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#API/Initial_and_Runtime_Filtering')
- [remoteOperations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations/remoteOperations.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/')
- [DataGrid Demos](/Demos/WidgetsGallery/Demo/DataGrid/Filtering/jQuery/Light/)
