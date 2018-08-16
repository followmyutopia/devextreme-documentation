===========================================================================
<!--type-->function(filterValue, selectedFilterOperation, target)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the column's custom filtering rules.
<!--/shortDescription-->

<!--fullDescription-->
This function must return a [filter expression](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering). The simplest filter expression has the following format:

    [selector, selectedFilterOperation, filterValue]

- **selector**      
A data source field or a function providing actual column values. Pass **this.calculateCellValue** if your column contains [calculated values]({basewidgetpath}/Configuration/columns/#calculateCellValue).
- **selectedFilterOperation**       
A comparison operator. One of the following: *"=", "<>", ">", ">=", "<", "<=", "between", "startswith", "endswith", "contains", "notcontains"*.    

 [note] For the *"between"* operator, the returned filter expression has a slightly different format: `[[selector, ">=", startValue], "and", [selector, "<=", endValue]]`. 

- **filterValue**        
A user input value. Values the **selector** provides are compared to this value.

The following code shows the default **calculateFilterExpression** function implementation. You can change it as required.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [{
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
                    // Invokes the default filtering behavior
                    return this.defaultCalculateFilterExpression.apply(this, arguments);
                },
                // ...
            }]
        });
    });

##### Angular

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
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
            // Invokes the default filtering behavior
            return this.defaultCalculateFilterExpression.apply(this, arguments);
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

    <!--HTML-->
    <dx-{widget-name} ... >
        <dxi-column [calculateFilterExpression]="calculateFilterExpression" ... ></dxi-column>
    </dx-{widget-name}>
    
---

In the previous code, the **defaultCalculateFilterExpression** function invokes the default behavior. You can omit the function call if you do not need it. 

#include uiwidgets-ref-functioncontext with { 
    value: "column's configuration"
}
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

<!--typeFunctionParamName3-->target<!--/typeFunctionParamName3-->
<!--typeFunctionParamType3-->String<!--/typeFunctionParamType3-->
<!--typeFunctionParamDescription3-->
The UI element where the filter expression was set.  
Possible values: *"filterRow"*, *"headerFilter"*, *"filterBuilder", and *"search"*.
<!--/typeFunctionParamDescription3-->

<!--typeFunctionReturnType-->Filter expression<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A filter expression.
<!--/typeFunctionReturnDescription-->