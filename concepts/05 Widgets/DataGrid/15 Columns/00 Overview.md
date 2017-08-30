Columns represent sets of data values that have the same type. To configure columns, assign an array of objects to the [columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) option. Each object in it configures a single column. If a column does not need to be customized, this array may include the name of the field that provides data for this column.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({ 
            // ...
            columns: [
                { dataField: "Title", caption: "Position" },
                { dataField: "FullName", width: 300 }, 
                "CompanyName",
                "City"
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column dataField="Title" caption="Position"></dxi-column>
        <dxi-column dataField="FullName" [width]="300"></dxi-column>
        <dxi-column dataField="CompanyName"></dxi-column>
        <dxi-column dataField="City"></dxi-column>
    </dx-data-grid>
    
---

The **DataGrid** generates a column per data field if you do not specify the **columns** array. You can make minor adjustments to these columns with the [customizeColumns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#customizeColumns) function. Use the function's parameter to access the column configurations.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({ 
            // ...
            customizeColumns: function (columns) {
                columns[0].width = 100;
                columns[1].width = 210;
            }
        })
    });

##### Angular
    
    <!--TypeScript-->
    export class AppComponent {
        customizeColumns (columns) {
            columns[0].width = 100;
            columns[1].width = 210;
        }
    }

    <!--HTML-->
    <dx-data-grid ...
        [customizeColumns]="customizeColumns">
    </dx-data-grid>
    
---

This topic has outlined the ways to configure columns in the **DataGrid** widget. For a detailed overview of column features, refer to other topics in this section.

#####See Also#####
- **Column Types**: [Data Columns](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Data_Columns/) | [Band Columns](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Band_Columns/) | [Lookup Columns](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Lookup_Columns/) | [Command Columns](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Command_Columns/)
