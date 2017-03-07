<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Add column
<!--/d-->
<!--p1d-->The options of the added column<!--/p1d-->
===================================================================
===================================================================

<!--shortDescription-->
Adds a new [column](/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Grid_Columns) to a grid.
<!--/shortDescription-->

<!--paramName1-->columnOptions<!--/paramName1-->
<!--paramType1-->object|string<!--/paramType1-->
<!--paramDescription1-->
The options of the added column or the name of a data field.
<!--/paramDescription1-->

<!--fullDescription-->
To add a column to a grid, call the **addColumn(columnOptions)** method of the grid instance. Pass the options of the added column as the **columnOptions** argument. Refer to the [columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) option description for the full list of available options.

There may be cases, when no options, except the [dataField](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataField), are required to be specified. In this instance, pass the name of the data field as the argument to the **addColumn(columnOptions)** method instead of the object with column options.
<!--/fullDescription-->