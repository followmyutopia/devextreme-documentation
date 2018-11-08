===================================================================
===================================================================

<!--shortDescription-->
Updates a data item with a specific key.
<!--/shortDescription-->

<!--paramName1-->key<!--/paramName1-->
<!--paramType1-->Object|String|Number<!--/paramType1-->
<!--paramDescription1-->
A data item's key value.
<!--/paramDescription1-->

<!--paramName2-->values<!--/paramName2-->
<!--paramType2-->Object<!--/paramType2-->
<!--paramDescription2-->
An object with new values for the data item.
<!--/paramDescription2-->

<!--returnType-->Promise<any><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the data item is updated. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
In the following code, **dataObj** is a data object updated in the database and returned from the server. If the server returns nothing or the store works with local data, **dataObj** contains the data object passed to the **update** method.

---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        // {WidgetName} is configured here
    });

    store.update(1, { name: "John Smith" })
         .done(function (dataObj, key) {
             // Process the key and data object here
         })
         .fail(function (error) {
             // Handle the "error" here
         });

##### Angular

    <!--TypeScript-->
    import {WidgetName} from "devextreme/data/{widget_name}";
    // ...
    export class AppComponent {
        store: {WidgetName};
        constructor() {
            this.store = new {WidgetName}({
                // {WidgetName} is configured here
            });
            this.store.update(1, { name: "John Smith" })
                .then(
                    (dataObj) => { /* Process the data object here */ },
                    (error) => { /* Handle the "error" here */ }
                );
        };
    }
    
---

<!--/fullDescription-->