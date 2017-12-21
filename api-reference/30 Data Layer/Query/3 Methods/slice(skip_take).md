===================================================================
===================================================================

<!--shortDescription-->
Limits the number of data items.
<!--/shortDescription-->

<!--paramName1-->skip<!--/paramName1-->
<!--paramType1-->Number<!--/paramType1-->
<!--paramDescription1-->
The number of items to be skipped.
<!--/paramDescription1-->

<!--paramName2-->take<!--/paramName2-->
<!--paramType2-->Number|undefined<!--/paramType2-->
<!--paramDescription2-->
Optional. The number of items to pick out. 
<!--/paramDescription2-->

<!--returnType-->Query<!--/returnType-->
<!--returnDescription-->
The [Query](/Documentation/ApiReference/Data_Layer/Query/) object.
<!--/returnDescription-->

<!--fullDescription-->
The following example demonstrates how to pick 5 to 15 items from the Query.

    <!--JavaScript-->
    var data = DevExpress.data.query(inputArray).slice(5, 10).toArray();
<!--/fullDescription-->