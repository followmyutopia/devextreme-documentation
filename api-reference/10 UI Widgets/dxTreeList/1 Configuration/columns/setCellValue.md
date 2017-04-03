<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->function(rowData, value)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a function to be invoked after the cell value is edited by a user, but before it will be saved in the data source.
<!--/shortDescription-->

<!--fullDescription-->
Using this function, you can process user input before it will be saved in the data source. This function accepts the **rowData** and **value** parameters. **value** is the user input that you should assign to one of the fields of the **rowData**. Initially, **rowData** is an empty object. Fill it with fields whose values should be saved in the data object of the current row.  

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [
                "field1",
                {
                    dataField: "field2",
                    setCellValue: function(rowData, value) {
                        rowData.field2 = value;
                        rowData.field1 = null;
                    }
                },
                // ...
            ]
        });
    });
    

[note] To invoke the default behavior, call the **this.defaultSetCellValue(rowData, value)** function.
<!--/fullDescription-->
<!--typeFunctionParamName1-->rowData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The data object where new data should be set.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->value<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->any<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The input value.
<!--/typeFunctionParamDescription2-->

<!--handmade-->
<!--/handmade-->