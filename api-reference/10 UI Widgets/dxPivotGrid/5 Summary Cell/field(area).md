===================================================================
===================================================================

<!--shortDescription-->
Gets a pivot grid field that corresponds to the summary cell.
<!--/shortDescription-->

<!--paramName1-->area<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
The area from which to get the field: *"row"*, *"column"*, or *"data"*.
<!--/paramDescription1-->

<!--returnType-->PivotGridDataSource_Options_fields<!--/returnType-->
<!--returnDescription-->
The pivot grid field.
<!--/returnDescription-->

<!--fullDescription-->
If the [header items](/Documentation/Guide/Widgets/PivotGrid/Grouping/#Data_Grouping) are expanded and the cell belongs to multiple fields, the field of the deepest expanded header item is returned. The image below demonstrates what field will be returned by the following code.

    <!--JavaScript-->var columnField = sourceCell.field("column");

![](/Content/images/doc/19_1/DataGrid/PivotGrid_field.png)
<!--/fullDescription-->