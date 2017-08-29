<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Adds one more sorting condition to the current [Query](/Documentation/ApiReference/Data_Layer/Query/).
<!--/shortDescription-->

<!--paramName1-->getter<!--/paramName1-->
<!--paramType1-->object<!--/paramType1-->
<!--paramDescription1-->
The getter by which to sort the items.
<!--/paramDescription1-->

<!--returnType-->Object<!--/returnType-->
<!--returnDescription-->
The current Query object.
<!--/returnDescription-->

<!--fullDescription-->
This method can only follow the [sortBy(getter)](/Documentation/ApiReference/Data_Layer/Query/Methods/#sortBygetter), [sortBy(getter, desc)](/Documentation/ApiReference/Data_Layer/Query/Methods/#sortBygetter_desc), [thenBy(getter, desc)](/Documentation/ApiReference/Data_Layer/Query/Methods/#thenBygetter_desc), or another **thenBy(getter)** method.

The following example demonstrates how to get an array of the Query items sorted by **category** and then by **name** property values.

    <!--JavaScript-->
    var data = DevExpress.data.query(inputArray)
        .sortBy("category")
        .thenBy("name")
        .toArray();

For more information on sort expressions, refer to the [Sorting](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Sorting) section of the Data Layer article. For information on getters, refer to the [Getters and Setters section](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters) of the Data Layer article.
<!--/fullDescription-->