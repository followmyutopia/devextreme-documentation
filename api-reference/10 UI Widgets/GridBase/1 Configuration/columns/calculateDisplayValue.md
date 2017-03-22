<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->string | function(rowData)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how to get a value to be displayed in a cell when it is not in an editing state.
<!--/shortDescription-->

<!--fullDescription-->
If the grid data source contains the values that you wish to display, assign the [dataField](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataField) value of the required column to this option.
If the values you want to display can be calculated using the values of several columns, or can be acquired from a remote data source, assign a function to this option.
<!--/fullDescription-->
<!--typeFunctionParamName1-->rowData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The object representing the grid row to which the cell belongs.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->any<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A value to be displayed in a cell.
<!--/typeFunctionReturnDescription-->