---
id: Store.Options.onUpdated
type: function(key, values)
EventForAction: Store.updated
---
---
##### shortDescription
A function that is executed after a data item is updated in the store.

##### param(key): Object | String | Number
The updated data item's key.

##### param(values): Object
Updated values.

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        onUpdated: function (key, values) {
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
                onUpdated: function (key, values) {
                    // Your code goes here
                }
            })
        }
    }
    
---