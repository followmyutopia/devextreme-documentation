<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Returns row index by key value
<!--/d-->
<!--p1d-->Key value of row<!--/p1d-->
<!--rd-->Row index<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Allows you to obtain the row index by a data key.
<!--/shortDescription-->

<!--paramName1-->key<!--/paramName1-->
<!--paramType1-->object|string|number<!--/paramType1-->
<!--paramDescription1-->
The data key of a row in the store.
<!--/paramDescription1-->

<!--returnType-->numeric<!--/returnType-->
<!--returnDescription-->
The <i>visible</i> row index. If nothing found, returns <i>-1</i>.
<!--/returnDescription-->

<!--fullDescription-->
dxDataGrid's API comprises a great number of methods, some of which accept data keys as their arguments while the others accept row indexes. If you have a data key, you can obtain the respective row index by calling the **getRowIndexByKey(key)** method. And vice versa as well, if you have a row index, you can obtain the respective data key by calling the [getKeyByRowIndex(rowIndex)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getKeyByRowIndexrowIndex) method. For information on how row indexes are calculated in **DataGrid**, refer to the [Grid Rows](/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Grid_Rows) article.
<!--/fullDescription-->