<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Calculates the average item value for the current [Query](/Documentation/ApiReference/Data_Layer/Query/).
<!--/shortDescription-->

<!--paramName1-->getter<!--/paramName1-->
<!--paramType1-->object<!--/paramType1-->
<!--paramDescription1-->
A getter for calculating the current value.
<!--/paramDescription1-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise of the jQuery.Deferred object resolved after the operation is completed.
<!--/returnDescription-->

<!--fullDescription-->
The following example demonstrates how to calculate the average value of the **price** property values of the Query items.

    <!--JavaScript-->
    DevExpress.data.query(inputArray)
        .avg("price")
        .done(function(result) {
            // 'result' holds the desired value
        });

If a Query item is a numeric value, use the [avg()](/Documentation/ApiReference/Data_Layer/Query/Methods/#avg) method instead of this one.

For information on getters, refer to the [Getters and Setters section](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters) of the Data Layer article.
<!--/fullDescription-->