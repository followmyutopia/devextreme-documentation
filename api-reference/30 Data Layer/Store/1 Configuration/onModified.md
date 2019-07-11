<!--id-->Store.Options.onModified<!--/id-->
<!--EventForAction-->Store.modified<!--/EventForAction-->
===========================================================================
<!--type-->function()<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed after a data item is added, updated, or removed from the store.
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        onModified: function () {
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
                onModified: function () {
                    // Your code goes here
                }
            })
        }
    }
    
---
<!--/fullDescription-->