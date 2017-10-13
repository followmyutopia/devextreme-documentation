<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Groups the current [Query](/Documentation/ApiReference/Data_Layer/Query/) data.
<!--/shortDescription-->

<!--paramName1-->getter<!--/paramName1-->
<!--paramType1-->object<!--/paramType1-->
<!--paramDescription1-->
The getter by which to group the data.
<!--/paramDescription1-->

<!--returnType-->Query<!--/returnType-->
<!--returnDescription-->
This Query object.
<!--/returnDescription-->

<!--fullDescription-->
The following example demonstrates how to get an array of the Query items grouped by the **name** property value.

    <!--JavaScript-->
    var data = DevExpress.data.query(inputArray)
        .groupBy("name")
        .toArray();

For more information on group expressions, refer to the [Grouping](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Grouping) section of the Data Layer article. For information on getters, refer to the [Getters and Setters section](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters) of the Data Layer article.
<!--/fullDescription-->