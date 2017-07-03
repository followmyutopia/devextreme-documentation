<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--merge--><!--/merge-->
===========================================================================

<!--fullDescription-->
Using this function, you can process user input before it is saved to the data source. This function accepts the **newData**, **value** and **currentRowData** parameters. **value** is the user input that you should assign to one of the fields of the **newData**. Initially, **newData** is an empty object. Fill it with fields whose values should be saved in the data object of the current row. **currentRowData** is a read-only parameter used to access the current row data.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
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
    export class AppComponent {
        setCellValue (newData, value, currentRowData) {
            newData.Count = value;
            newData.TotalPrice = currentRowData.Price * value;
        }
    }

    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column dataField="Price"></dxi-column>
        <dxi-column
            dataField="Count"
            dataType="number"
            [setCellValue]="setCellValue">
        </dxi-column>
        <dxi-column dataField="TotalPrice"></dxi-column>
    </dx-tree-list>
    
---

[note] To invoke the default behavior, call the **this.defaultSetCellValue(rowData, value)** function.
<!--/fullDescription-->

<!--handmade-->
<!--/handmade-->