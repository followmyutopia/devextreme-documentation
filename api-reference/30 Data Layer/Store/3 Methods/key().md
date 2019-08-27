---
id: Store.key()
---
---
##### shortDescription
Gets the key property (or properties) as specified in the [key]({basewidgetpath}/Configuration/#key) option.

##### return: any
The **key** option's value.

---
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        // ...
        key: "ProductID"
    });

    var keyProps = store.key(); // returns "ProductID"

##### Angular

    <!--TypeScript-->
    import {WidgetName} from "devextreme/data/{widget_name}";
    // ...
    export class AppComponent {
        store: {WidgetName};
        constructor() {
            this.store = new {WidgetName}({
                // ...
                key: "ProductID"
            });
            let keyProps = this.store.key(); // returns "ProductID"
        };
    }
    
---