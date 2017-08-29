<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Sorts current [Query](/Documentation/ApiReference/Data_Layer/Query/) data.
<!--/shortDescription-->

<!--paramName1-->getter<!--/paramName1-->
<!--paramType1-->object<!--/paramType1-->
<!--paramDescription1-->
The getter by which to sort the data.
<!--/paramDescription1-->

<!--paramName2-->desc<!--/paramName2-->
<!--paramType2-->boolean<!--/paramType2-->
<!--paramDescription2-->
Specifies whether to sort items in descending or ascending order.
<!--/paramDescription2-->

<!--returnType-->Object<!--/returnType-->
<!--returnDescription-->
This Query object.
<!--/returnDescription-->

<!--fullDescription-->
The following example demonstrates how to get an array of the Query items sorted by the **name** property value in the descending order.

    <!--JavaScript-->
    var data = DevExpress.data.query(inputArray)
        .sortBy("name", true)
        .toArray();

For more information on sorting expressions, refer to the [Sorting](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Sorting) section of the Data Layer article. For information on getters, refer to the [Getters and Setters section](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters) of the Data Layer article.
<!--/fullDescription-->