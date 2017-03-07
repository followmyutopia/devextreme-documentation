<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Returns key value of row by index
<!--/d-->
<!--p1d-->Row index<!--/p1d-->
<!--rd-->Key value<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Allows you to obtain the data key by a row index.
<!--/shortDescription-->

<!--paramName1-->rowIndex<!--/paramName1-->
<!--paramType1-->numeric<!--/paramType1-->
<!--paramDescription1-->
The <i>visible</i> row index.
<!--/paramDescription1-->

<!--returnType-->any<!--/returnType-->
<!--returnDescription-->
The data key of the row. If nothing found, returns <i>undefined</i>.
<!--/returnDescription-->

<!--fullDescription-->
dxDataGrid's API comprises a great number of methods, some of which accept data keys as their arguments while the others accept row indexes. If you have a row index, you can obtain the respective data key by calling the **getKeyByRowIndex(rowIndex)** method. And vice versa as well, if you have a data key, you can obtain the respective row index by calling the [getRowIndexByKey(key)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getRowIndexByKeykey) method. For information on how row indexes are calculated in **DataGrid**, refer to the [Grid Rows](/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Grid_Rows) article.
<!--/fullDescription-->