===================================================================
===================================================================

<!--shortDescription-->
Groups data items.
<!--/shortDescription-->

<!--paramName1-->getter<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
The [getter](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters) to be used for grouping data.
<!--/paramDescription1-->

<!--returnType-->Query<!--/returnType-->
<!--returnDescription-->
The [Query](/Documentation/ApiReference/Data_Layer/Query/) object.
<!--/returnDescription-->

<!--fullDescription-->
The following example demonstrates how to get an array of the Query items grouped by the **name** property value.

    <!--JavaScript-->
    var data = DevExpress.data.query(inputArray)
        .groupBy("name")
        .toArray();

#####See Also#####
- [Data Layer - Grouping](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Grouping)
<!--/fullDescription-->