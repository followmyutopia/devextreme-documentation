<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
get child cell by direction, headerField value.
<!--/d-->
<!--p1d-->direction - 'row' || 'column'.<!--/p1d-->
<!--p2d-->header filed value.<!--/p2d-->
<!--rd-->children of current cell by direction<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Gets the child cell in a specified direction.
<!--/shortDescription-->

<!--paramName1-->direction<!--/paramName1-->
<!--paramType1-->string<!--/paramType1-->
<!--paramDescription1-->
The direction in which to search for the child cell. Can be 'row' or 'column'.
<!--/paramDescription1-->

<!--paramName2-->fieldValue<!--/paramName2-->
<!--paramType2-->number|string<!--/paramType2-->
<!--paramDescription2-->
The value of the child field whose summary cell should be returned.
<!--/paramDescription2-->

<!--returnType-->SummaryCell<!--/returnType-->
<!--returnDescription-->
The child cell.
<!--/returnDescription-->

<!--fullDescription-->
Use this method for **Total** and **Grand Total** cells to get one of the cells, whose value is involved in the calculation of the total value.
The image below demonstrates what cell will be returned by the following code.

	<!--JavaScript-->var targetCell = sourceCell.child('row', 8); //August is the 8th month

![](/Content/images/doc/16_1/DataGrid/PivotGrid_child.png)

This method is opposite to the [parent(direction)](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Summary_Cell/#parentdirection) method.
<!--/fullDescription-->