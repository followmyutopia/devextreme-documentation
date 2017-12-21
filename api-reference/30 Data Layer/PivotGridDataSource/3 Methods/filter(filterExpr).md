===================================================================
===================================================================

<!--shortDescription-->
Sets the [filter](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#filter) option's value. Does not take effect for the [XmlaStore](/Documentation/ApiReference/Data_Layer/XmlaStore/).
<!--/shortDescription-->

<!--paramName1-->filterExpr<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
A filter expression; described in the [Filtering](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering) section.
<!--/paramDescription1-->

<!--fullDescription-->
To apply a new filtering expression, call the [reload()](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#reload) method. The usage example is shown below.

    <!--JavaScript-->pivotGridDataSource.filter("price", "<", 100);
    pivotGridDataSource.reload()

<!--/fullDescription-->