===================================================================
===================================================================

<!--shortDescription-->
Sets the [filter](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter) option's value.
<!--/shortDescription-->

<!--paramName1-->filterExpr<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
A filter expression; described in the [Filtering](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering) section.      
Pass **null** to clear filtering settings.
<!--/paramDescription1-->

<!--fullDescription-->
    <!--JavaScript-->
    dataSource.filter("age", ">", 18);

<!--/fullDescription-->