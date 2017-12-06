===========================================================================
<!--type-->function(newData, value, currentRowData)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a function to be invoked after the user has edited a cell value, but before it will be saved in the data source.
<!--/shortDescription-->

<!--fullDescription-->
Using this function, you can process user input before it is saved to the data source. This function accepts the **newData**, **value** and **currentRowData** parameters. **value** is the user input that you should assign to one of the fields of the **newData**. Initially, **newData** is an empty object. Fill it with fields whose values should be saved in the data object of the current row. **currentRowData** is a read-only parameter used to access the current row data.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [
                "Price",
                {
                    dataField: "Count",
                    dataType: "number",
                    setCellValue: function(newData, value, currentRowData) {
                        newData.Count = value;
                        newData.TotalPrice = currentRowData.Price * value;
                    }
                },
                "TotalPrice",
                // ...
            ]
        });
    });

##### Angular

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from 'devextreme-angular';
    // ...
    export class AppComponent {
        setCellValue (newData, value, currentRowData) {
            newData.Count = value;
            newData.TotalPrice = currentRowData.Price * value;
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
        <dxi-column dataField="Price"></dxi-column>
        <dxi-column
            dataField="Count"
            dataType="number"
            [setCellValue]="setCellValue">
        </dxi-column>
        <dxi-column dataField="TotalPrice"></dxi-column>
    </dx-{widget-name}>

---

[note] To invoke the default behavior, call the **this.defaultSetCellValue(rowData, value)** function.
<!--/fullDescription-->
<!--typeFunctionParamName1-->newData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The data object where new data should be set.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->value<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->any<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The input value.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionParamName3-->currentRowData<!--/typeFunctionParamName3-->
<!--typeFunctionParamType3-->object<!--/typeFunctionParamType3-->
<!--typeFunctionParamDescription3-->
A read-only parameter providing access to the current row data.
<!--/typeFunctionParamDescription3-->
