===========================================================================
<!--type-->function(filterValue, selectedFilterOperation, target)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the column's custom filtering rules.
<!--/shortDescription-->

<!--fullDescription-->
This function must return a filter expression, which is an array of the following format:

    [selector, selectedFilterOperation, filterValue]

- **selector**      
A data source field or a function providing actual values for the column. If you are in doubt what to pass here, pass **this.calculateCellValue**.
- **selectedFilterOperation**       
A comparison operator. One of the following: *"=", "<>", ">", ">=", "<", "<=", "between", "startswith", "endswith", "contains", "notcontains"*.    
- **filterValue**        
A user input value. Values provided by the **selector** are compared to this value.

The following code snippet shows the default implementation of the **calculateFilterExpression** function. Adapt it according to your needs.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                calculateFilterExpression: function (filterValue, selectedFilterOperation) {
                    // Implementation for the "between" comparison operator
                    if (selectedFilterOperation === "between" && $.isArray(filterValue)) {
                        var filterExpression = [
                            [this.calculateCellValue, ">=", filterValue[0]], 
                            "and", 
                            [this.calculateCellValue, "<=", filterValue[1]]
                        ];
                        return filterExpression;
                    }
                    return [this.calculateCellValue, selectedFilterOperation || '=', filterValue];
                },
                // ...
            }]
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        calculateFilterExpression (filterValue, selectedFilterOperation) {
            // Implementation for the "between" comparison operator
            let column = this as any;
            if (selectedFilterOperation === "between" && Array.isArray(filterValue)) {
                var filterExpression = [
                    [column.calculateCellValue, ">=", filterValue[0]], 
                    "and", 
                    [column.calculateCellValue, "<=", filterValue[1]]
                ];
                return filterExpression;
            }
            return [column.calculateCellValue, selectedFilterOperation || '=', filterValue];
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column [calculateFilterExpression]="calculateFilterExpression" ... ></dxi-column>
    </dx-data-grid>
    
---

As you can see from the previous code, the filter expression for the *"between"* comparison operator should have a slightly different format.

    [[selector, ">=", startValue], "and", [selector, "<=", endValue]]

[note]

Call the **this.defaultCalculateFilterExpression(filterValue, selectedFilterOperation)** function and return its result to invoke the default behavior.

---
##### jQuery

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

##### Angular

    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        calculateFilterExpression (filterValue, selectedFilterOperation) {
            // ...
            let column = this as any;
            return column.defaultCalculateFilterExpression(filterValue, selectedFilterOperation);
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column [calculateFilterExpression]="calculateFilterExpression" ... ></dxi-column>
    </dx-data-grid>
    
---

[/note]
<!--/fullDescription-->
<!--typeFunctionParamName1-->filterValue<!--/typeFunctionParamName1-->
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
The UI element where the filter expression was set.  
Possible values: *"filterRow"*, *"headerFilter"* and *"search"*.
<!--/typeFunctionParamDescription3-->

<!--typeFunctionReturnType-->Filter expression<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A filter expression.
<!--/typeFunctionReturnDescription-->