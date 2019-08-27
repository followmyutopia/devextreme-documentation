---
id: Store.Options.onModified
type: function()
EventForAction: Store.modified
---
---
##### shortDescription
A function that is executed after a data item is added, updated, or removed from the store.

---
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