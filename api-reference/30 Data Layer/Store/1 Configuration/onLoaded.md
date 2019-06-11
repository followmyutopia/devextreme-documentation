<!--id-->Store.Options.onLoaded<!--/id-->
<!--EventForAction-->..\4 Events\loaded.md<!--/EventForAction-->
===========================================================================
<!--type-->function(result)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed after data is loaded to the store.
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        onLoaded: function (result) {
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
                onLoaded: function (result) {
                    // Your code goes here
                }
            })
        }
    }
    
---
<!--/fullDescription-->
<!--typeFunctionParamName1-->result<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Array<any><!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The loaded data.
<!--/typeFunctionParamDescription1-->
