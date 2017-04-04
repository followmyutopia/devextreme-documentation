<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->function(rowData)<!--/type-->
===========================================================================

<!--shortDescription-->
Calculates custom values for column cells.
<!--/shortDescription-->

<!--fullDescription-->
By default, column cells contain values from the [data field]({basewidgetpath}/Configuration/columns/#dataField), but you can populate them with custom values instead. For this, declare the **calculateCellValue** function that will be called each time a new row is being rendered.

The following restrictions are imposed on a column that contains calculated values.

- Values cannot be edited at runtime.
- Sorting and grouping by this column are disabled by default. To enable them, set the column's [allowSorting]({basewidgetpath}/Configuration/columns/#allowSorting) and [allowGrouping]({basewidgetpath}/Configuration/columns/#allowGrouping) options to *true* explicitly.
- Filtering and searching in this column may be performed improperly. To avoid this, implement the [calculateFilterExpression]({basewidgetpath}/Configuration/columns/#calculateFilterExpression) function.

[note]

To invoke the default behavior, call the **this.defaultCalculateCellValue(rowData)** function and return its result.

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            columns: [{
                calculateCellValue: function(rowData) {
                    // ...
                    return this.defaultCalculateCellValue(rowData);
                }
            }]
        });
    });

[/note]

#####See Also#####
- **columns[]** | [calculateDisplayValue]({basewidgetpath}/Configuration/columns/#calculateDisplayValue)

<!--/fullDescription-->
<!--typeFunctionParamName1-->rowData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The data of the row to which the cell belongs.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->any<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A custom value for the cell.
<!--/typeFunctionReturnDescription-->