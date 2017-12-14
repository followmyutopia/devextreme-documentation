===================================================================
===================================================================

<!--shortDescription-->
Calculates a custom summary for the items in the current [Query](/Documentation/ApiReference/Data_Layer/Query/).
<!--/shortDescription-->

<!--paramName1-->step<!--/paramName1-->
<!--paramType1-->function()<!--/paramType1-->
<!--paramDescription1-->
A function called for each item.
<!--/paramDescription1-->

<!--returnType-->Promise<any><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the operation is completed. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
The **step** function takes on two arguments. The first argument is an accumulator value changed on each **step** function execution. The **step** function should return the updated value of this argument. 

[note] The accumulator value is initialized to the value of the first item. Therefore, the step function is called only for the second item, and subsequent items.

The following example demonstrates how to calculate the total value for the Query items. Suppose that each item of the Query is an object providing the **price** numeric property, among other properties.

    <!--JavaScript-->
    var total = 0;
    DevExpress.data.query(inputArray)
        .aggregate(
            function(total, itemData) {
                total += itemData;
            }
        )
        .done(function(result) {
            // 'result' holds the desired value
        });

The total value calculation is a demonstrative example of this function's usage. However, note that this functionality is already implemented in the [sum()](/Documentation/ApiReference/Data_Layer/Query/Methods/#sum) and [sum(getter)](/Documentation/ApiReference/Data_Layer/Query/Methods/#sumgetter) methods.
<!--/fullDescription-->