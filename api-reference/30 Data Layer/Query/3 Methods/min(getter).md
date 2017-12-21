===================================================================
===================================================================

<!--shortDescription-->
Finds a data item with the minimum getter value.
<!--/shortDescription-->

<!--paramName1-->getter<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
The [getter](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters).
<!--/paramDescription1-->

<!--returnType-->Promise<Number, Date><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the operation is completed. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
The following example demonstrates how to get the minimum value from the **price** property values of the Query items.

    <!--JavaScript-->
    DevExpress.data.query(inputArray)
        .max("price")
        .done(function(result) {
            // 'result' holds the desired value
        });

If a Query item is a numeric value, use the [min()](/Documentation/ApiReference/Data_Layer/Query/Methods/#min) method instead of this one.

<!--/fullDescription-->