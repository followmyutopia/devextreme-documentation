<!--id-->Store.Options.onUpdating<!--/id-->
<!--EventForAction-->Store.updating<!--/EventForAction-->
===========================================================================
<!--type-->function(key, values)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed before a data item is updated in the store.
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        onUpdating: function (key, values) {
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
                onUpdating: function (key, values) {
                    // Your code goes here
                }
            })
        }
    }
    
---
<!--/fullDescription-->
<!--typeFunctionParamName1-->key<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object|String|Number<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The key of the data item to be updated.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->values<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->Object<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
New values for the data item fields.
<!--/typeFunctionParamDescription2-->
