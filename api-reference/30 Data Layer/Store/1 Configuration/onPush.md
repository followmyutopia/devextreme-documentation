<!--id-->Store.Options.onPush<!--/id-->
<!--EventForAction-->..\4 Events\push.md<!--/EventForAction-->
===========================================================================
<!--type-->function(changes)<!--/type-->
===========================================================================

<!--shortDescription-->
The function executed before changes are pushed to the store.
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        onPush: function(changes) {
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
                onPush: (changes) => {
                    // Your code goes here
                }
            })
        }
    }
    
---
<!--/fullDescription-->
<!--typeFunctionParamName1-->changes<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Array<any><!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Changes passed in the [push(changes)]({basewidgetpath}/Methods/#pushchanges) method.
<!--/typeFunctionParamDescription1-->
