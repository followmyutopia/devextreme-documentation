<!--id-->Query.aggregate(seed, step, finalize)<!--/id-->
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
A function that is called after the calculation is finished.
<!--/paramDescription3-->

<!--returnType-->Promise<any><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the operation is completed. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var step = function (total, itemData) {
        // "total" is an accumulator value that should be changed on each iteration
        // "itemData" is the item to which the function is being applied
        return total + itemData;
    };

    var finalize = function (total) {
        // "total" is the resulting accumulator value
        return total / 1000;
    };

    DevExpress.data.query([10, 20, 30, 40, 50])
        .aggregate(0, step, finalize)
        .done(function (result) {
            console.log(result); // outputs 0.15
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

            let finalize = total => {
                // "total" is the resulting accumulator value
                return total / 1000;
            };

            Query([10, 20, 30, 40, 50])
                .aggregate(0, step, finalize)
                .then(result => {
                    console.log(result); // outputs 0.15
                });
        };
    }

---
<!--/fullDescription-->