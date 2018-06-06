===================================================================
===================================================================

<!--shortDescription-->
Executes the **Query**. This is an asynchronous alternative to the [toArray()](/Documentation/ApiReference/Data_Layer/Query/Methods/#toArray) method.
<!--/shortDescription-->

<!--returnType-->Promise<any><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the operation is completed. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    DevExpress.data.query("http://mydomain.com/MyDataService", queryOptions)
        .enumerate()
        .done(function (result) {
            // "result" contains the obtained array
        });

##### Angular

    <!--TypeScript-->
    import Query from "devextreme/data/query";
    // ...
    export class AppComponent {
        constructor () {
            Query("http://mydomain.com/MyDataService", queryOptions)
                .enumerate()
                .then(result => {
                    // "result" contains the obtained array
                });
        };
    }

---
<!--/fullDescription-->