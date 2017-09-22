<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->'string' | 'number' | 'date' | 'datetime' | 'boolean' | 'object'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Casts column values to a specific data type.
<!--/shortDescription-->

<!--fullDescription-->
If your data source stores, for example, numbers as strings, specify the proper data type using the **dataType** option.
 
Date-time values have the following specifics.

- If date-time values are stored as strings, they should have one of the following formats: `"yyyy/MM/dd"`, `"yyyy/MM/dd HH:mm:ss"`, `"yyyy-MM-ddTHH:mm:ssx"` or `"yyyy-MM-ddTHH:mm:ss"`.        
- To show both date and time in a column editor, set the [format]({basewidgetpath}/Configuration/columns/#format) option to a value that includes date and time parts, and assign *"datetime"* to the [editorOptions]({basewidgetpath}/Configuration/columns/#editorOptions).**type** option as shown in the following code.

    ---
    #####jQuery 

        <!--JavaScript-->$(function() {
            $("#dataGridContainer").dxDataGrid({
                // ...
                columns: [{
                    dataField: "HireDate",
                    dataType: "date",
                    format: "shortDateShortTime",
                    editorOptions: { type: "datetime" }
                }]
            });
        });

    #####Angular

        <!--HTML-->
        <dx-data-grid>
            <dxi-column
                dataField="HireDate"
                dataType="date"
                format="shortDateShortTime"
                [editorOptions]="{ type: 'datetime' }">
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

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `GridColumnDataType` enum. This enum accepts the following values: `String`, `Number`, `Date`, `DateTime`, `Boolean` and `Object`.

#####See Also#####
- [Data Columns](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Data_Columns/)
<!--/fullDescription-->