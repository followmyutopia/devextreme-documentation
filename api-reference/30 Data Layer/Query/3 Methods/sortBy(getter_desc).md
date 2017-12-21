===================================================================
===================================================================

<!--shortDescription-->
Sorts data items in the specified sort order.
<!--/shortDescription-->

<!--paramName1-->getter<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
The [getter](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters) to be used for sorting data.
<!--/paramDescription1-->

<!--paramName2-->desc<!--/paramName2-->
<!--paramType2-->Boolean<!--/paramType2-->
<!--paramDescription2-->
Specifies whether to sort items in descending or ascending order.
<!--/paramDescription2-->

<!--returnType-->Query<!--/returnType-->
<!--returnDescription-->
The [Query](/Documentation/ApiReference/Data_Layer/Query/) object.
<!--/returnDescription-->

<!--fullDescription-->
The following example demonstrates how to get an array of the Query items sorted by the **name** property value in the descending order.

    <!--JavaScript-->
    var data = DevExpress.data.query(inputArray)
        .sortBy("name", true)
        .toArray();

#####See Also#####
- [Data Layer - Sorting](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Sorting)
<!--/fullDescription-->