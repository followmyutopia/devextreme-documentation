<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Finds the item with the maximum value in the [Query](/Documentation/ApiReference/Data_Layer/Query/).
<!--/shortDescription-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise of the jQuery.Deferred object resolved after the operation is completed.
<!--/returnDescription-->

<!--fullDescription-->
If a Query item is an object, you should transform it to a numeric type with the [select(getter)](/Documentation/ApiReference/Data_Layer/Query/Methods/#selectgetter) method, or use the [max(getter)](/Documentation/ApiReference/Data_Layer/Query/Methods/#maxgetter) method instead of **max()**.

The following example demonstrates how to get the maximum value from the **price** property values of the Query items.

    <!--JavaScript-->
    DevExpress.data.query(inputArray)
        .select(function(itemData) {
            return itemData.price;
        })
        .max()
        .done(function(result) {
            // 'result' holds the desired value
        });
<!--/fullDescription-->