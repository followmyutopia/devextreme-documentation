===================================================================
===================================================================

<!--shortDescription-->
Calculates the sum of getter values.
<!--/shortDescription-->

<!--paramName1-->getter<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
The [getter](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters) to be used for calculating the sum.
<!--/paramDescription1-->

<!--returnType-->Promise<Number><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the operation is completed. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
The following example demonstrates how to calculate the total **price** value of the Query items.

    <!--JavaScript-->
    DevExpress.data.query(inputArray)
        .sum("price")
        .done(function(result) {
            // 'result' holds the desired value
        });

If a Query item is a numeric value, use the [sum()](/Documentation/ApiReference/Data_Layer/Query/Methods/#sum) method instead of this one.

<!--/fullDescription-->