<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->function(rowData)<!--/type-->
===========================================================================

<!--shortDescription-->
Calculates custom values for column cells.
<!--/shortDescription-->

<!--fullDescription-->
Column cells contain values from the [data field]({basewidgetpath}/Configuration/columns/#dataField) by default, but you can populate them with custom values instead. For this, declare the **calculateCellValue** function that is called each time a new row is rendered.

Certain features are disabled in a column with calculated values by default. The following list specifies these features and how you can enable them:

<div class="simple-table">
    <table>
        <tr>
          <th style="width:30%">Feature</th>
          <th>Action that enables it</th>
        </tr>
        <tr>
          <td>Editing</td>
          <td>Implement the <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#setCellValue">setCellValue</a> function.</td>
        </tr>
        <tr>
          <td>Sorting</td>
          <td>Set the <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowSorting">allowSorting</a> option to <i>true</i>.</td>
        </tr>
        <tr>
          <td>Grouping</td>
          <td>Set the <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowGrouping">allowGrouping</a> option to <i>true</i>.</td>
        </tr>
        <tr>
          <td>Filtering</td>
          <td>Set the <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowFiltering">allowFiltering</a> option to <i>true</i>.</td>
        </tr>
        <tr>
          <td>Searching</td>
          <td>Set the <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowSearch">allowSearch</a> option to <i>true</i>.</td>
        </tr>
    </table>
</div>

[note]

Call the **this.defaultCalculateCellValue(rowData)** function and return its result to invoke the default behavior.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            columns: [{
                calculateCellValue: function(rowData) {
                    // ...
                    return this.defaultCalculateCellValue(rowData);
                }
            }]
        });
    });

##### Angular

    <!--TypeScript-->
    export class AppComponent {
        calculateCellValue (rowData) {
            // ...
            let column = this as any;
            return column.defaultCalculateCellValue(rowData);

        }
    }

    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column [calculateCellValue]="calculateCellValue" ... ></dxi-column>
    </dx-data-grid>
    
---

[/note]

#####See Also#####
- **columns[]**.[calculateDisplayValue]({basewidgetpath}/Configuration/columns/#calculateDisplayValue)

<!--/fullDescription-->
<!--typeFunctionParamName1-->rowData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Data of the row to which the cell belongs.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->any<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A cell's custom value.
<!--/typeFunctionReturnDescription-->