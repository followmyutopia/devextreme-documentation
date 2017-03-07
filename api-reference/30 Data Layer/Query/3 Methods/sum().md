<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Calculates sum of items in current query.
<!--/d-->
<!--rd-->Promise of jQuery.Deferred. Resolves with summary value or rejects with an Error object<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Calculates the sum of item values in the current [Query](/Documentation/ApiReference/Data_Layer/Query/).
<!--/shortDescription-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise of the jQuery.Deferred object resolved after the operation is completed.
<!--/returnDescription-->

<!--fullDescription-->
If a Query item is an object, you should transform it to a numeric type with the [select(getter)](/Documentation/ApiReference/Data_Layer/Query/Methods/#selectgetter) method, or use the [sum(getter)](/Documentation/ApiReference/Data_Layer/Query/Methods/#sumgetter) method instead of **sum()**.

The following example demonstrates how to calculate the total **price** value of the Query items.

    <!--JavaScript-->
    DevExpress.data.query(inputArray)
        .select("price")
        .sum()
        .done(function(result) {
            // 'result' holds the desired value
        });
<!--/fullDescription-->