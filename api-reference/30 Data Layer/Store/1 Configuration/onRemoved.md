<!--id-->Store.Options.onRemoved<!--/id-->
<!--EventForAction-->Store.removed<!--/EventForAction-->
===========================================================================
<!--type-->function(key)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed after a data item is removed from the store.
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        onRemoved: function (key) {
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
                onRemoved: function (key) {
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
The removed data item's key.
<!--/typeFunctionParamDescription1-->
