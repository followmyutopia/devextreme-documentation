<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->function(filterValue, selectedFilterOperation, target)<!--/type-->
===========================================================================

<!--shortDescription-->
Calculates filters when the column contains custom data.
<!--/shortDescription-->

<!--fullDescription-->
When you use the [calculateCellValue]({basewidgetpath}/Configuration/columns/#calculateCellValue) function to populate the column with data, implement the **calculateFilterExpression** function as well. This ensures proper filtering and search in this column.

This function must return a filter expression, which is an array of the following format.

    [selector, selectedFilterOperation, filterValue]

- **selector**      
A data source field or a function providing actual values for the column. If you are in doubt what to pass here, pass **this.calculateCellValue**.
- **selectedFilterOperation**       
A comparison operator. One of the following: *"=", "<>", ">", ">=", "<", "<=", "between", "startswith", "endswith", "contains", "notcontains"*.    
- **filterValue**        
A user input value. Values provided by the **selector** will be compared to this value.

The following code snippet provides a typical implementation of the **calculateFilterExpression** function.

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                calculateCellValue: function (rowData) {
                    return rowData.Amount * rowData.Cost;
                },
                calculateFilterExpression: function (filterValue, selectedFilterOperation) {
                    // Implementation for the 'between' comparison operator
                    /* if(selectedFilterOperation === "between" && $.isArray(filterValue)) {
                        var filterExpression = [
                            [this.calculateCellValue, ">=", filterValue[0]], 
                            "and", 
                            [this.calculateCellValue, "<=", filterValue[1]]
                        ];
                        return filterExpression;
                    } */
                    return [this.calculateCellValue, selectedFilterOperation || '=', filterValue];
                },
                // ...
            }, //...
            ]
        });
    });

As you can see from the previous code, the filter expression for the *"between"* comparison operator should have a slightly different format.

    [[selector, ">=", startValue], "and", [selector, "<=", endValue]]

[note]

To invoke the default behavior, call the **this.defaultCalculateFilterExpression(filterValue, selectedFilterOperation)** function and return its result.

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            columns: [{
                calculateFilterExpression: function(filterValue, selectedFilterOperation) {
                    // ...
                    return this.defaultCalculateFilterExpression(filterValue, selectedFilterOperation);
                }
            }]
        });
    });

[/note]
<!--/fullDescription-->
<!--typeFunctionParamName1-->filtervalue<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->any<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
A user input value.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->selectedFilterOperation<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->string<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The currently selected filter operation.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionParamName3-->target<!--/typeFunctionParamName3-->
<!--typeFunctionParamType3-->string<!--/typeFunctionParamType3-->
<!--typeFunctionParamDescription3-->
The UI element where the filter expression was set.<br/>Possible values: <i>"filterRow"</i>, <i>"headerFilter"</i> and <i>"search"</i>.
<!--/typeFunctionParamDescription3-->

<!--typeFunctionReturnType-->Filter expression<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A filter expression.
<!--/typeFunctionReturnDescription-->