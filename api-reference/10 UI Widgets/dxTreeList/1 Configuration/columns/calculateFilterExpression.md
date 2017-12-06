===========================================================================
<!--handmade--><!--/handmade-->
<!--merge--><!--/merge-->
===========================================================================

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
        $("#treeListContainer").dxTreeList({
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
    import { DxTreeListModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        calculateFilterExpression (filterValue, selectedFilterOperation) {
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
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column [calculateFilterExpression]="calculateFilterExpression"></dxi-column>
    </dx-tree-list>
    
---

As you can see from the previous code, the filter expression for the *"between"* comparison operator should have a slightly different format.

    [[selector, ">=", startValue], "and", [selector, "<=", endValue]]

[note]

Call the **this.defaultCalculateFilterExpression(filterValue, selectedFilterOperation)** function and return its result to invoke the default behavior.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
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
    import { DxTreeListModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        calculateFilterExpression (filterValue, selectedFilterOperation) {
            // ...
            return this.defaultCalculateFilterExpression(filterValue, selectedFilterOperation);
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column [calculateFilterExpression]="calculateFilterExpression" ... ></dxi-column>
    </dx-tree-list>
    
---

[/note]
<!--/fullDescription-->