If you use the [calculateCellValue](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#calculateCellValue) function to populate a column with data, filtering and searching in this column may malfunction. Implement the [calculateFilterExpression](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#calculateFilterExpression) function to put them in order. This function must return a filter expression that is an array of the following format.

    [selector, selectedFilterOperation, filterValue]

- **selector**      
A data source field or a function providing actual values for the column. If you are in doubt what to pass here, pass **this.calculateCellValue**.
- **selectedFilterOperation**       
A comparison operator. One of the following: *"=", "<>", ">", ">=", "<", "<=", "between", "startswith", "endswith", "contains", "notcontains"*.    
- **filterValue**        
A user input value. Values provided by the **selector** will be compared to this value.

The following code snippet provides a typical implementation of the **calculateFilterExpression** function.

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                calculateCellValue: function (rowData) {
                    return rowData.Amount * rowData.Cost;
                },
                calculateFilterExpression: function (filterValue, selectedFilterOperation) {
                    // Implementation for the "between" comparison operator
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
