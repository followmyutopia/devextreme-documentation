<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Finds the item with the minimum value in the [Query](/Documentation/ApiReference/Data_Layer/Query/).
<!--/shortDescription-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the operation is completed. It is a [jQuery.Promise](http://api.jquery.com/Types/#Promise) if the [useJQuery](/Documentation/ApiReference/Common/Object_Structures/globalConfig/#useJQuery) flag is enabled and a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) otherwise.
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