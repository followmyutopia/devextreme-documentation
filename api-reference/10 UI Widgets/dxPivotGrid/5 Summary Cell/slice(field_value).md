===================================================================
===================================================================

<!--shortDescription-->
Gets the cell located by the path of the source cell with one field value changed.
<!--/shortDescription-->

<!--paramName1-->field<!--/paramName1-->
<!--paramType1-->PivotGridDataSource_Options_fields<!--/paramType1-->
<!--paramDescription1-->
The index in the [fields](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) array, [dataField](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField) or [caption](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#caption) of the field.
<!--/paramDescription1-->

<!--paramName2-->value<!--/paramName2-->
<!--paramType2-->Number|String<!--/paramType2-->
<!--paramDescription2-->
The **field**'s value.
<!--/paramDescription2-->

<!--returnType-->dxPivotGridSummaryCell<!--/returnType-->
<!--returnDescription-->
The target cell.
<!--/returnDescription-->

<!--fullDescription-->
Use this method when you need to get a cell located by the similar path with one of its components changed. 
The image below demonstrates what cell will be returned by the following code.

    <!--JavaScript-->var targetCell = sourceCell.slice("year", 1998);

![](/Content/images/doc/18_2/DataGrid/PivotGrid_slice.png)
<!--/fullDescription-->