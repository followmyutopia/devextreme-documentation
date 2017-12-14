===================================================================
===================================================================

<!--shortDescription-->
Gets the child cell in a specified direction.
<!--/shortDescription-->

<!--paramName1-->direction<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
The direction in which to search for the child cell. Can be 'row' or 'column'.
<!--/paramDescription1-->

<!--paramName2-->fieldValue<!--/paramName2-->
<!--paramType2-->Number|String<!--/paramType2-->
<!--paramDescription2-->
The value of the child field whose summary cell should be returned.
<!--/paramDescription2-->

<!--returnType-->dxPivotGridSummaryCell<!--/returnType-->
<!--returnDescription-->
The child cell.
<!--/returnDescription-->

<!--fullDescription-->
Use this method for **Total** and **Grand Total** cells to get one of the cells, whose value is involved in the calculation of the total value.
The image below demonstrates what cell will be returned by the following code.

    <!--JavaScript-->var targetCell = sourceCell.child('row', 8); //August is the 8th month

![](/Content/images/doc/17_2/DataGrid/PivotGrid_child.png)

This method is opposite to the [parent(direction)](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Summary_Cell/#parentdirection) method.
<!--/fullDescription-->