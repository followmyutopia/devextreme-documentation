<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Function which to return filter for data source. To invoke the default behavior, call defaultCalculateFilterExpression.<!--/d-->
===========================================================================
<!--type-->function(filterValue, selectedFilterOperation, target)<!--/type-->
<!--fp1d-->The value typed in the filter row's cell.<!--/fp1d-->
<!--fp2d-->The currently selected filter operation.<!--/fp2d-->
<!--fp3d-->Available values 'filterRow', 'headerFilter' and 'search'.<!--/fp3d-->
<!--frd-->A filter expression.<!--/frd-->
===========================================================================

<!--shortDescription-->
Specifies a callback function that defines filters for customary calculated grid cells.
<!--/shortDescription-->

<!--fullDescription-->
When you use the [calculateCellValue](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue) option to populate a column with data, you are required to implement the **calculateFilterExpression** callback function in order to perform filtering and search operations in this column. This action is required, because these operations are performed on data source objects, not on grid records.

The implemented function must return an array of the following items.

**1.** The data source field or a function providing actual values for a grid column. Commonly, the **calculateCellValue** function is passed here.		
**2.** The comparison operator. The following operators are available: *"=", "<>", ">", ">=", "<", "<=", "between", "startswith", "endswith", "contains", "notcontains"*.		
**3.** The value typed into a filter row cell. The actual values will be compared to this value.

[note]The 'between' comparison operator is not supported on the data source level. If you need to use it, create a filter expression of the following format: [[selector, ">=", startValue], "and", [selector, "<=", endValue]] (see the code below). In case the selected filter operation is 'between', the **filterValue** field of the **calculateFilterExpression** function is an array containing the start and end values of the specified range.

The following code snippet demonstrates an example of  **calculateCellValue** and **calculateFilterExpression** function implementation.

    <!--JavaScript-->$("#gridContainer").dxDataGrid({
        // ...
        columns: [{
            calculateCellValue: function (rowData) {
                return rowData.Amount * rowData.Cost;
            },
            calculateFilterExpression: function (filterValue, selectedFilterOperation) {
                // The way of implementation in case of the 'between' comparison operator
                /*if(selectedFilterOperation === "between" && $.isArray(filterValue)) {
                    var filterExpression = [
                        [this.calculateCellValue, ">=", filterValue[0]], 
                        "and", 
                        [this.calculateCellValue, "<=", filterValue[1]]
                    ];
                    return filterExpression;
                }*/
                return [this.calculateCellValue, selectedFilterOperation || '=', filterValue];
            },
            // ...
        }, //...
        ]
    });

[note] To invoke the default behavior, call the **this.defaultCalculateFilterExpression(filterValue, selectedFilterOperation)** function and return its result.
<!--/fullDescription-->
<!--typeFunctionParamName1-->filtervalue<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->any<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The text typed in the filter row's cell.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->selectedFilterOperation<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->string<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The currently selected filter operation.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionParamName3-->target<!--/typeFunctionParamName3-->
<!--typeFunctionParamType3-->string<!--/typeFunctionParamType3-->
<!--typeFunctionParamDescription3-->
Identifies the type of the filtering UI element where the filter expression was set.<br/>Possible values: "filterRow", "headerFilter" and "search".
<!--/typeFunctionParamDescription3-->

<!--typeFunctionReturnType-->Filter expression<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A filter expression.
<!--/typeFunctionReturnDescription-->