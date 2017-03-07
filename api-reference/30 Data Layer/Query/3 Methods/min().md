<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Finds minimal item in current query.
<!--/d-->
<!--rd-->Promise of jQuery.Deferred. Resolves with summary value or rejects with an Error object<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Finds the item with the minimum value in the [Query](/Documentation/ApiReference/Data_Layer/Query/).
<!--/shortDescription-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise of the jQuery.Deferred object resolved when the operation is completed.
<!--/returnDescription-->

<!--fullDescription-->
If a Query item is an object, you should transform it to a numeric type with the [select(getter)](/Documentation/ApiReference/Data_Layer/Query/Methods/#selectgetter) method, or use the [min(getter)](/Documentation/ApiReference/Data_Layer/Query/Methods/#mingetter) method instead of **min()**.

The following example demonstrates how to get the minimum value from the **price** property values of the Query items.

    <!--JavaScript-->
    DevExpress.data.query(inputArray)
        .select(function(itemData) {
            return itemData.price;
        })
        .min()
        .done(function(result) {
            // 'result' holds the desired value
        });
<!--/fullDescription-->