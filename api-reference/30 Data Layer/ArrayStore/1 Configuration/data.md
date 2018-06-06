===========================================================================
<!--type-->Array<any><!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the store's associated array.
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        data: [
            { id: 1, name: "John Doe" },
            // ...
        ]
    });

##### Angular

    <!--TypeScript-->
    import {WidgetName} from "devextreme/data/{widget_name}";
    // ...
    export class AppComponent {
        store: {WidgetName};
        constructor() {
            this.store = new {WidgetName}({
                data: [
                    { id: 1, name: "John Doe" },
                    // ...
                ]
            })
        }
    }
    
---
<!--/fullDescription-->
