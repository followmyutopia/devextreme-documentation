===================================================================
===================================================================

<!--shortDescription-->
Gets all child cells in a specified direction.
<!--/shortDescription-->

<!--paramName1-->direction<!--/paramName1-->
<!--paramType1-->string<!--/paramType1-->
<!--paramDescription1-->
The direction in which to search for child cells. Can be 'row' or 'column'.
<!--/paramDescription1-->

<!--returnType-->Array<dxPivotGridSummaryCell><!--/returnType-->
<!--returnDescription-->
The array of child cells.
<!--/returnDescription-->

<!--fullDescription-->
This method is a general case of the [child(direction, fieldValue)](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Summary_Cell/#childdirection_fieldValue) method. It returns all the cells whose values were involved in a calculation of the total value. Use it for **Total** and **Grand Total** cells.
<!--/fullDescription-->