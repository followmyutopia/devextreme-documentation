<!--id-->Query.count()<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Calculates the number of data items.
<!--/shortDescription-->

<!--returnType-->Promise<Number><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the operation is completed. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    DevExpress.data.query([10, 20, 30, 40, 50])
        .count()
        .done(function (result) {
            console.log(result); // outputs 5
        });

##### Angular

    <!--TypeScript-->
    import Query from "devextreme/data/query";
    // ...
    export class AppComponent {
        constructor () {
            Query([10, 20, 30, 40, 50])
                .count()
                .then(result => {
                    console.log(result); // outputs 5
                });
        };
    }

---
<!--/fullDescription-->