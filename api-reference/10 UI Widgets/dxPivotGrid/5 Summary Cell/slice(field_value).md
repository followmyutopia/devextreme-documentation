<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
get cell slice.
<!--/d-->
<!--p1d-->column or row header field.<!--/p1d-->
<!--p2d-->header filed value.<!--/p2d-->
<!--rd-->cell by slice<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Gets the cell located by the path of the source cell with one field value changed.
<!--/shortDescription-->

<!--paramName1-->field<!--/paramName1-->
<!--paramType1-->PivotGridField<!--/paramType1-->
<!--paramDescription1-->
The index in the <a href="/Documentation/16_1/ApiReference/Data_Library/PivotGridDataSource/Configuration/fields/">fields</a> array, <a href="/Documentation/16_1/ApiReference/Data_Library/PivotGridDataSource/Configuration/fields/#dataField">dataField</a> or <a href="/Documentation/16_1/ApiReference/Data_Library/PivotGridDataSource/Configuration/fields/#caption">caption</a> of the field.
<!--/paramDescription1-->

<!--paramName2-->value<!--/paramName2-->
<!--paramType2-->number|string<!--/paramType2-->
<!--paramDescription2-->
The <b>field</b>'s value.
<!--/paramDescription2-->

<!--returnType-->SummaryCell<!--/returnType-->
<!--returnDescription-->
The target cell.
<!--/returnDescription-->

<!--fullDescription-->
Use this method when you need to get a cell located by the similar path with one of its components changed. 
The image below demonstrates what cell will be returned by the following code.

	<!--JavaScript-->var targetCell = sourceCell.slice('year', 1998);

![](/Content/images/doc/16_1/DataGrid/PivotGrid_slice.png)
<!--/fullDescription-->