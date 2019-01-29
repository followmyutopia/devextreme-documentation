===================================================================
===================================================================

<!--shortDescription-->
Gets a partial Grand Total cell of a row or column.
<!--/shortDescription-->

<!--paramName1-->direction<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
The direction in which to search for the grand total cell. Can be "row" or "column".
<!--/paramDescription1-->

<!--returnType-->dxPivotGridSummaryCell<!--/returnType-->
<!--returnDescription-->
The partial Grand Total cell.
<!--/returnDescription-->

<!--fullDescription-->
The image below demonstrates what cell will be returned by the following code.

    <!--JavaScript-->var targetCell = sourceCell.grandTotal("row");

![](/Content/images/doc/19_1/DataGrid/PivotGrid_GT.png)
<!--/fullDescription-->