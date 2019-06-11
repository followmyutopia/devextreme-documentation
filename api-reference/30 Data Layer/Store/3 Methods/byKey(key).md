<!--id-->Store.byKey(key)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Gets a data item with a specific key.
<!--/shortDescription-->

<!--paramName1-->key<!--/paramName1-->
<!--paramType1-->Object|String|Number<!--/paramType1-->
<!--paramDescription1-->
A data item's key value.
<!--/paramDescription1-->

<!--returnType-->Promise<any><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after the data item is loaded. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    // The key consists of a single data field
    var singleKeyStore = new DevExpress.data.{WidgetName}({
        key: "field1",
        // ...
    });

    // Gets the data item with "field1" being equal to 1
    singleKeyStore.byKey(1)
        .done(function (dataItem) {
            // Process the "dataItem" here
        })
        .fail(function (error) {
            // Handle the "error" here
        });

    // The key consists of several data fields
    var compositeKeyStore = new DevExpress.data.{WidgetName}({
        key: [ "field1", "field2" ],
        // ...
    });

    // Gets the data item with both "field1" and "field2" being equal to 1
    compositeKeyStore.byKey({
        field1: 1,
        field2: 1
    }).done(function (dataItem) {
        // Process the "dataItem" here
    })
    .fail(function (error) {
        // Handle the "error" here
    });

##### Angular

    <!--TypeScript-->
    import {WidgetName} from "devextreme/data/{widget_name}";
    // ...
    export class AppComponent {
        singleKeyStore: {WidgetName};
        compositeKeyStore: {WidgetName};

        constructor() {
            // The key consists of a single data field
            this.singleKeyStore = new {WidgetName}({
                key: "field1",
                // ...
            });
            // Gets the data item with "field1" being equal to 1
            this.singleKeyStore.byKey(1).then(
                (dataItem) => { /* Process the "dataItem" here */ },
                (error) => { /* Handle the "error" here */ }
            );

            // The key consists of several data fields
            this.compositeKeyStore = new {WidgetName}({
                key: [ "field1", "field2" ],
                // ...
            });
            // Gets the data item with both "field1" and "field2" being equal to 1
            this.compositeKeyStore.byKey({
                field1: 1,
                field2: 1
            }).then(
                (dataItem) => { /* Process the "dataItem" here */ },
                (error) => { /* Handle the "error" here */ }
            );
        };
    }
    
---
<!--/fullDescription-->