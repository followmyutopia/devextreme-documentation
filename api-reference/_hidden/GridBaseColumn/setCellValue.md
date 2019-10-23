---
id: GridBaseColumn.setCellValue
type: function(newData, value, currentRowData)
---
---
##### shortDescription
Specifies a function to be invoked after the user has edited a cell value, but before it will be saved in the data source.

##### param(newData): Object
The data object where new data should be set.

##### param(value): any
The input value.

##### param(currentRowData): Object
A read-only parameter providing access to the current row data.

##### return: void | Promise<void>
Return a promise for an asynchronous operation or return nothing.

---
This function allows you to process user input before it is saved to the data source. It accepts the **newData**, **value**, and **currentRowData** parameters. **value** is the user input that you should assign to one of the **newData** fields. Fill the empty **newData** object with fields whose values should be saved in the current row's data object. The read-only **currentRowData** parameter can be used to access the current row's data.

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
    import { Dx{WidgetName}Module } from "devextreme-angular";
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

#####Vue

    <!-- tab: App.vue -->
    <template>
        <dx-{widget-name} ... >
            <dx-column data-field="Price" />
            <dx-column data-field="Count" data-type="number" />
            <dx-column data-field="TotalPrice" :set-cell-value="setCellValue" />
        </dx-{widget-name}>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Dx{WidgetName}, DxColumn } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxColumn
        },
        // ...
        methods: {
            setCellValue(newData, value, currentRowData) {
                newData.Count = value;
                newData.TotalPrice = currentRowData.Price * value;
            }
        }
    };
    </script>

#####React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { {WidgetName}, Column } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        setCellValue(newData, value, currentRowData) {
            newData.Count = value;
            newData.TotalPrice = currentRowData.Price * value;
        }

        render() {
            return (
                <{WidgetName} ... >
                    <Column dataField="Price" />
                    <Column dataField="Count" dataType="numeric" setCellValue={this.setCellValue}/>
                    <Column dataField="TotalPrice" />
                </{WidgetName}>
            );
        }
    }
    export default App;

#####ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().{WidgetName}()
        // ...
        .Columns(c => {
            c.Add().DataField("Price");
            c.Add().DataField("Count")
                .DataType(GridColumnDataType.Number)
                .SetCellValue(@<text>
                    function(newData, value, currentRowData) {
                        newData.Count = value;
                        newData.TotalPrice = currentRowData.Price * value;
                    }
                </text>);
            c.Add().DataField("TotalPrice");
        })
    )

---

To invoke the default behavior, call the **this.defaultSetCellValue(newData, value)** function.

#include uiwidgets-ref-functioncontext with { 
    value: "column's configuration"
}
