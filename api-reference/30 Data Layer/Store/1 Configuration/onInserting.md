<!--id-->Store.Options.onInserting<!--/id-->
<!--EventForAction-->Store.inserting<!--/EventForAction-->
===========================================================================
<!--type-->function(values)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed before a data item is added to the store.
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        onInserting: function (values) {
            // Your code goes here
        }
    });

##### Angular

    <!--TypeScript-->
    import {WidgetName} from "devextreme/data/{widget_name}";
    // ...
    export class AppComponent {
        store: {WidgetName};
        constructor() {
            this.store = new {WidgetName}({
                onInserting: function (values) {
                    // Your code goes here
                }
            })
        }
    }
    
---
<!--/fullDescription-->
<!--typeFunctionParamName1-->values<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The data item to be added.
<!--/typeFunctionParamDescription1-->
