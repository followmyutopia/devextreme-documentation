<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
get a previous cell by direction within individual groups, or throughout the Pivot Grid.
<!--/d-->
<!--p1d-->direction - 'row' || 'column'.<!--/p1d-->
<!--p2d-->allow get previous cell throught individul groups.<!--/p2d-->
<!--rd-->previous of current cell by direction<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Gets the cell previous to current in a specified direction.
<!--/shortDescription-->

<!--paramName1-->direction<!--/paramName1-->
<!--paramType1-->string<!--/paramType1-->
<!--paramDescription1-->
The direction in which to search for the previous cell. Can be 'row' or 'column'.
<!--/paramDescription1-->

<!--paramName2-->allowCrossGroup<!--/paramName2-->
<!--paramType2-->bool<!--/paramType2-->
<!--paramDescription2-->
Specifies whether to allow this method to return cells from groups other than the current one.
<!--/paramDescription2-->

<!--returnType-->SummaryCell<!--/returnType-->
<!--returnDescription-->
The cell previous to the current one.
<!--/returnDescription-->

<!--fullDescription-->
This method is opposite to the [next(direction, allowCrossGroup)](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Summary_Cell/#nextdirection_allowCrossGroup) method.
<!--/fullDescription-->