Data columns are the most common type of columns used in the **DataGrid** widget. They are generated for all [column](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) array members that do not configure [band columns](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/#Band_Columns). Data columns display values from a [data field](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataField) to which they are bound, but you can populate them with custom values (see [Customize Cells](/Documentation/Guide/Widgets/DataGrid/Columns/Customize_Cells/)).

![DevExtreme HTML5 JavaScript DataGrid DataColumns](/Content/images/doc/18_2/DataGrid/visual_elements/column-types_data.png)

A data column automatically detects the type of its values. However, if the values should be converted (for example, if dates are stored as strings), set the target type using the [dataType](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataType) option. The widget takes the data type into account when [filtering](/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/), [sorting](/Documentation/Guide/Widgets/DataGrid/Sorting/), and performing other data operations.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            dataSource: [{
                HireDate: "2017/04/13",
                // ...
            },
            //...
            ],
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

#####See Also#####
- [Customize Cells](/Documentation/Guide/Widgets/DataGrid/Columns/Customize_Cells/)
- [Lookup Columns](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/#Lookup_Columns)
- [DataGrid Demos](/Demos/WidgetsGallery/Demo/DataGrid/SimpleArray/jQuery/Light/)

[tags] dataGrid, data grid, column types, data columns
