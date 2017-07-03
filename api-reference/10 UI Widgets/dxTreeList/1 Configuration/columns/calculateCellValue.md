<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--merge--><!--/merge-->
===========================================================================

<!--fullDescription-->
Column cells contain values from the [data field]({basewidgetpath}/Configuration/columns/#dataField) by default, but you can populate them with custom values instead. For this, declare the **calculateCellValue** function that will be called each time a new row is rendered.

Certain features are disabled in a column with calculated values by default. The following list specifies these features and how you can enable them:

<div class="simple-table">
    <table>
        <tr>
          <th style="width:30%">Feature</th>
          <th>Action that enables it</th>
        </tr>
        <tr>
          <td>Editing</td>
          <td>Implement the <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#setCellValue">setCellValue</a> function.</td>
        </tr>
        <tr>
          <td>Sorting</td>
          <td>Set the <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#allowSorting">allowSorting</a> option to <i>true</i>.</td>
        </tr>
        <tr>
          <td>Filtering</td>
          <td>Set the <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#allowFiltering">allowFiltering</a> option to <i>true</i>.</td>
        </tr>
        <tr>
          <td>Searching</td>
          <td>Set the <a href="/Documentation/17_2/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#allowSearch">allowSearch</a> option to <i>true</i>.</td>
        </tr>
    </table>
</div>

[note]

To invoke the default behavior, call the **this.defaultCalculateCellValue(rowData)** function and return its result.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            columns: [{
                calculateCellValue: function (rowData) {
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
            return this.defaultCalculateCellValue(rowData);
        }
    }

    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column [calculateCellValue]="calculateCellValue" ... ></dxi-column>
    </dx-tree-list>
    
---

[/note]

#####See Also#####
- [Customize the Value and Text](/Documentation/Guide/Widgets/TreeList/Columns/Customize_Cells/#Customize_the_Value_and_Text)
- **columns[]** | [calculateDisplayValue]({basewidgetpath}/Configuration/columns/#calculateDisplayValue)

<!--/fullDescription-->

<!--handmade-->
<!--/handmade-->
