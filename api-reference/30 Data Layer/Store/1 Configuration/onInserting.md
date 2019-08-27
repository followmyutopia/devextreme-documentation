---
id: Store.Options.onInserting
type: function(values)
EventForAction: Store.inserting
---
---
##### shortDescription
A function that is executed before a data item is added to the store.

##### param(values): Object
The data item to be added.

---
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