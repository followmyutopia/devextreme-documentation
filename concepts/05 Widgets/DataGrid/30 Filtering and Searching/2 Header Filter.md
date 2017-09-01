A header filter allows a user to filter values in an individual column by including or excluding them from the applied filter. A click on a header filter icon invokes a popup menu with all unique values in the column. By selecting or clearing the selection of values in this menu, the user includes or excludes them from the filter.

![DevExtreme HTML5 JavaScript jQuery Knockout Angular DataGrid Filtering HeaderFilter](/Content/images/doc/17_2/DataGrid/visual_elements/header_filter.png)

To make header filter icons visible for all columns, assign **true** to the [headerFilter](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/headerFilter/).**visible** option. Set a column's [allowHeaderFiltering](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowHeaderFiltering) option to **false** if its header filter should not be available. Note that this option inherits the value of the [allowFiltering](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowFiltering) option by default.

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
    
---

A header filter's popup menu simply lists all column values by default. You can group them using the **headerFilter**.[groupInterval](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/headerFilter/#groupInterval) option if they are numbers or dates. You can also provide a completely custom data source for a header filter using the [dataSource](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/headerFilter/#dataSource) option. Refer to the option's description for details.

#####See Also#####
- [Filtering API - Initial and Runtime Filtering](/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#API/Initial_and_Runtime_Filtering)
- [DataGrid Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Filtering/jQuery/Light/)