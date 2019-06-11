<!--id-->Query.aggregate(step)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Calculates a custom summary for all data items.
<!--/shortDescription-->

<!--paramName1-->step<!--/paramName1-->
<!--paramType1-->function()<!--/paramType1-->
<!--paramDescription1-->
A function that is called for each item.
<!--/paramDescription1-->

<!--returnType-->Promise<any><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the operation is completed. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
This is a shortcut for the [aggregate(seed, step, finalize)](/Documentation/ApiReference/Data_Layer/Query/Methods/#aggregateseed_step_finalize) method. It omits the **seed** and **finalize** parameters: instead of the **seed** value, the accumulator value is initialized with the first item's value; the **finalize** parameter's omission means that the calculation result is the accumulator value after the last **step** function's execution.

---
##### jQuery

    <!--JavaScript-->
    var step = function (total, itemData) {
        // "total" is an accumulator value that should be changed on each iteration
        // "itemData" is the item to which the function is being applied
        return total + itemData;
    };

    DevExpress.data.query([10, 20, 30, 40, 50])
        .aggregate(step)
        .done(function (result) {
            console.log(result); // outputs 150
        });

##### Angular

    <!--TypeScript-->
    import Query from "devextreme/data/query";
    // ...
    export class AppComponent {
        constructor () {
            let step = (total, itemData) => {
                // "total" is an accumulator value that should be changed on each iteration
                // "itemData" is the item to which the function is being applied
                return total + itemData;
            };

            Query([10, 20, 30, 40, 50])
                .aggregate(step)
                .then(result => {
                    console.log(result); // outputs 150
                });
        };
    }

---
<!--/fullDescription-->