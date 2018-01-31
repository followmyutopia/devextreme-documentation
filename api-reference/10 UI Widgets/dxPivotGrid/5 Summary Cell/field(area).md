===================================================================
===================================================================

<!--shortDescription-->
Gets the row or column field to which the current cell belongs.
<!--/shortDescription-->

<!--paramName1-->area<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
The area from which to get a field. Can be *'row'* or *'column'*.
<!--/paramDescription1-->

<!--returnType-->PivotGridDataSourceOptions_fields<!--/returnType-->
<!--returnDescription-->
The row or column field.
<!--/returnDescription-->

<!--fullDescription-->
If the [header items](/Documentation/Guide/Widgets/PivotGrid/Grouping/#Data_Grouping) are expanded and the cell belongs to multiple fields, the field of the deepest expanded header item is returned. The image below demonstrates what field will be returned by the following code.

    <!--JavaScript-->var columnField = sourceCell.field('column');

![](/Content/images/doc/18_1/DataGrid/PivotGrid_field.png)
<!--/fullDescription-->