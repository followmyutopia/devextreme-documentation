===================================================================
===================================================================

<!--shortDescription-->
Gets a data item's key value.
<!--/shortDescription-->

<!--paramName1-->obj<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
A data item.
<!--/paramDescription1-->

<!--returnType-->any<!--/returnType-->
<!--returnDescription-->
The data item's key value.
<!--/returnDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        // ...
        key: "id"
    });

    var key = store.keyOf({ id: 1, name: "John Doe" }); // returns 1

##### Angular

    <!--TypeScript-->
    import {WidgetName} from "devextreme/data/{widget_name}";
    // ...
    export class AppComponent {
        store: {WidgetName};
        constructor() {
            this.store = new {WidgetName}({
                // ...
                key: "id"
            });
            let key = this.store.keyOf({ id: 1, name: "John Doe" }); // returns 1
        };
    }
    
---
<!--/fullDescription-->
