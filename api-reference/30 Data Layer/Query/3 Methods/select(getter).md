===================================================================
===================================================================

<!--shortDescription-->
Selects data using a getter.
<!--/shortDescription-->

<!--paramName1-->getter<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
The [getter](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters).
<!--/paramDescription1-->

<!--returnType-->Query<!--/returnType-->
<!--returnDescription-->
This [Query](/Documentation/ApiReference/Data_Layer/Query/) object with transformed data.
<!--/returnDescription-->

<!--fullDescription-->
The following example demonstrates how to get an array of **price** values of initial Query items.

    <!--JavaScript-->
    var data = DevExpress.data.query(inputArray).select("price").toArray();

<!--/fullDescription-->