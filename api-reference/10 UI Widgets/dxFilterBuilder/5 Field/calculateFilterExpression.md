===========================================================================
<!--type-->function(filterValue, selectedFilterOperation)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the field's custom filtering rules.
<!--/shortDescription-->

<!--fullDescription-->
This function must return a [filter expression](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering). The simplest filter expression has the following format:

    [selector, selectedFilterOperation, filterValue]

- **selector**      
A data source field to be filtered. 
- **selectedFilterOperation**       
A comparison operator. One of the following: *"=", "<>", ">", ">=", "<", "<=", "between", "startswith", "endswith", "contains", "notcontains"*.    

 [note] For the *"between"* operator, the returned filter expression has a slightly different format: `[[selector, ">=", startValue], "and", [selector, "<=", endValue]]`. 

- **filterValue**        
A user input value. Values the **selector** provides are compared to this value.

The following code shows the default **calculateFilterExpression** function implementation. You can change it as required.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#filterBuilderContainer").dxFilterBuilder({
            // ...
            fields: [{
                calculateFilterExpression: function (filterValue, selectedFilterOperation) {
                    // Implementation for the "between" comparison operator
                    if (selectedFilterOperation === "between" && $.isArray(filterValue)) {
                        var filterExpression = [
                            [this.dataField, ">=", filterValue[0]], 
                            "and", 
                            [this.dataField, "<=", filterValue[1]]
                        ];
                        return filterExpression;
                    }
                    // Implementation for the "isBlank" and "isNotBlank" operators
                    if (filterValue === null && (selectedFilterOperation === "=" || selectedFilterOperation === "<>")) {
                        return [this.dataField, selectedFilterOperation, null];
                    }
                    // Invokes the default filtering behavior
                    return this.defaultCalculateFilterExpression.apply(this, arguments);
                },
                // ...
            }]
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxFilterBuilderModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        calculateFilterExpression (filterValue, selectedFilterOperation) {
            // Implementation for the "between" comparison operator
            if (selectedFilterOperation === "between" && Array.isArray(filterValue)) {
                var filterExpression = [
                    [this.dataField, ">=", filterValue[0]], 
                    "and", 
                    [this.dataField, "<=", filterValue[1]]
                ];
                return filterExpression;
            }
            // Implementation for the "isBlank" and "isNotBlank" operators
            if (filterValue === null && (selectedFilterOperation === "=" || selectedFilterOperation === "<>")) {
                return [this.dataField, selectedFilterOperation, null];
            }
            // Invokes the default filtering behavior
            return this.defaultCalculateFilterExpression.apply(this, arguments);
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFilterBuilderModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-filter-builder ... >
        <dxi-field [calculateFilterExpression]="calculateFilterExpression" ... ></dxi-field>
    </dx-filter-builder>
    
---

In the previous code, the **defaultCalculateFilterExpression** function invokes the default behavior. You can omit the function call if you do not need it. 
<!--/fullDescription-->
<!--typeFunctionParamName1-->filterValue<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->any<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
A user input value.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->selectedFilterOperation<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->String<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The selected filter operation.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->Filter expression<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A filter expression.
<!--/typeFunctionReturnDescription-->