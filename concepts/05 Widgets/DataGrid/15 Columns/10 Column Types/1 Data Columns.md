Data columns are the most common type of columns used in the **DataGrid** widget. They are generated for all members of the [columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) array that do not configure [band columns](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/#Band_Columns). Usually, a data column displays values from a [data field](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataField) to which it is bound, but you can populate a data column with custom values (see [Customize Cells](/Documentation/Guide/Widgets/DataGrid/Columns/Customize_Cells/)).

![DevExtreme HTML5 JavaScript DataGrid DataColumns](/Content/images/doc/17_2/DataGrid/visual_elements/column-types_data.png)

If data column values should be cast to another type (for example, date values stored as strings), specify the target type using the [dataType](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataType) option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: "HireDate",
                dataType: "date"
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column dataField="HireDate" dataType="date"></dxi-column>
    </dx-data-grid>
    
---

#####See Also#####
- [Customize Cells](/Documentation/Guide/Widgets/DataGrid/Columns/Customize_Cells/)
- [Lookup Columns](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/#Lookup_Columns)
- [DataGrid Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/LocalDataPlainStructure/jQuery/Light/)

[tags] dataGrid, data grid, column types, data columns
