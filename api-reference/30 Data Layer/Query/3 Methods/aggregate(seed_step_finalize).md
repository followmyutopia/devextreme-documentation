===================================================================
===================================================================

<!--shortDescription-->
Calculates a custom summary for all data items.
<!--/shortDescription-->

<!--paramName1-->seed<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
The initial value.
<!--/paramDescription1-->

<!--paramName2-->step<!--/paramName2-->
<!--paramType2-->function()<!--/paramType2-->
<!--paramDescription2-->
A function called for each item.
<!--/paramDescription2-->

<!--paramName3-->finalize<!--/paramName3-->
<!--paramType3-->function()<!--/paramType3-->
<!--paramDescription3-->
A function invoked after the operation is finished.
<!--/paramDescription3-->

<!--returnType-->Promise<any><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the operation is completed. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
The **step** function takes on two arguments. The first argument is an accumulator value changed on each **step** function execution. The **step** function should return the updated value of this argument. The second argument is a value of the current item. The **finalize** function takes on the resulting accumulator value, and should return the desired value. 

The following example demonstrates how to calculate the average value for the Query items. 

Suppose that each item of the Query is an object that provides the **price** numeric property, among other properties. To calculate the average price value, calculate the total price and divide it by the item count.

In this case, the **seed** argument specifies the initial value of the total price, which will be increased within the **step** function called for each item. The **finalize** function will divide the total price by the item count.

    <!--JavaScript-->
    var count = 0;
    DevExpress.data.query(inputArray)
        .aggregate(
            0, 
            function(total) {
                return total + itemData;
                count++;
            },
            function(total) {
                return total / count;
            }
         )
        .done(function(result) {
            // 'result' holds the desired value
        });

The average value calculation is an example of this function's usage. However, note that this functionality is already implemented in the [avg()](/Documentation/ApiReference/Data_Layer/Query/Methods/#avg) and [avg(getter)](/Documentation/ApiReference/Data_Layer/Query/Methods/#avggetter) methods.
<!--/fullDescription-->