<!--id-->Store.Options.onLoading<!--/id-->
<!--EventForAction-->Store.loading<!--/EventForAction-->
===========================================================================
<!--type-->function(loadOptions)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed before data is loaded to the store.
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        onLoading: function (loadOptions) {
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
                onLoading: function (loadOptions) {
                    // Your code goes here
                }
            })
        }
    }
    
---
<!--/fullDescription-->
<!--typeFunctionParamName1-->loadOptions<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->LoadOptions<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Data processing settings.
<!--/typeFunctionParamDescription1-->
