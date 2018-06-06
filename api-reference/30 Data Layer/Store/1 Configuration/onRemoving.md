<!--EventForAction-->..\4 Events\removing.md<!--/EventForAction-->
===========================================================================
<!--type-->function(key)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed before a data item is removed from the store.
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        onRemoving: function (key) {
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
                onRemoving: function (key) {
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
The key of the data item to be removed.
<!--/typeFunctionParamDescription1-->
