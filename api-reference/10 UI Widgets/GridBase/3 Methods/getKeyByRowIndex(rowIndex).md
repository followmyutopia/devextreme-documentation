<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
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
**DataGrid**'s API comprises a great number of methods, some of which accept data keys as their arguments while the others accept row indexes. If you have a row index, you can obtain the respective data key by calling the **getKeyByRowIndex(rowIndex)** method. And vice versa as well, if you have a data key, you can obtain the respective row index by calling the [getRowIndexByKey(key)]({basewidgetpath}/Methods/#getRowIndexByKeykey) method. For information on how row indexes are calculated in **DataGrid**, refer to the [Grid Rows](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Rows) article.
<!--/fullDescription-->