<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->function(rowData)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a callback function that calculates custom values for column cells.
<!--/shortDescription-->

<!--fullDescription-->
By default, column cells contain values from the [data field]({basewidgetpath}/Configuration/columns/#dataField), but you can populate them with custom values instead. For this, declare the **calculateCellValue** function that will be called each time a new row is being rendered.

The following restrictions are imposed on a column that contains calculated values.

- Values cannot be edited at runtime.
- Sorting by this column is disabled by default. To enable it, set the column's [allowSorting]({basewidgetpath}/Configuration/columns/#allowSorting) option to *true* explicitly.

[note]

To invoke the default behavior, call the **this.defaultCalculateCellValue(rowData)** function and return its result.

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            columns: [{
                calculateCellValue: function (rowData) {
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
Data of the row to which the cell belongs.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->any<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A custom value for the cell.
<!--/typeFunctionReturnDescription-->

<!--handmade-->
<!--/handmade-->