<!--id-->Store.Options.onInserted<!--/id-->
<!--EventForAction-->..\4 Events\inserted.md<!--/EventForAction-->
===========================================================================
<!--type-->function(values, key)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed after a data item is added to the store.
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        onInserted: function (values, key) {
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
                onInserted: function (values, key) {
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
The added data item.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->key<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->Object|String|Number<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The item's key.
<!--/typeFunctionParamDescription2-->
