===================================================================
===================================================================

<!--shortDescription-->
Filters data items using a filter expression.
<!--/shortDescription-->

<!--paramName1-->criteria<!--/paramName1-->
<!--paramType1-->Array<any><!--/paramType1-->
<!--paramDescription1-->
A filter expression; described in the [Filtering](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering) section.
<!--/paramDescription1-->

<!--returnType-->Query<!--/returnType-->
<!--returnDescription-->
The [Query](/Documentation/ApiReference/Data_Layer/Query/) object.
<!--/returnDescription-->

<!--fullDescription-->
The following example demonstrates how to get an array of the Query items whose **price** value is lower than 500.

    <!--JavaScript-->
    var data = DevExpress.data.query(inputArray).filter("price", "<", 500).toArray();

<!--/fullDescription-->