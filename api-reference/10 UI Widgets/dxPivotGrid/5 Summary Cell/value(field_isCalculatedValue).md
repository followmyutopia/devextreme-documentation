===================================================================
===================================================================

<!--shortDescription-->
Gets the value of any field linked with the current cell.
<!--/shortDescription-->

<!--paramName1-->field<!--/paramName1-->
<!--paramType1-->PivotGridDataSource_Options_fields|String<!--/paramType1-->
<!--paramDescription1-->
The field whose value to return.
<!--/paramDescription1-->

<!--paramName2-->isCalculatedValue<!--/paramName2-->
<!--paramType2-->Boolean<!--/paramType2-->
<!--paramDescription2-->
Specifies whether or not to return a [post-processed](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#calculateSummaryValue) value. Pass **false** here to get the initial summary value.
<!--/paramDescription2-->

<!--returnType-->any<!--/returnType-->
<!--returnDescription-->
The field value.
<!--/returnDescription-->

<!--fullDescription-->
Use this method when you need extra information about the current cell. You can use the value of any field to which the cell belongs.
<!--/fullDescription-->