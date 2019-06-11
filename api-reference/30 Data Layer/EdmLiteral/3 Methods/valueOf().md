<!--id-->EdmLiteral.valueOf()<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Gets the **EdmLiteral**'s value converted to a string.
<!--/shortDescription-->

<!--returnType-->String<!--/returnType-->
<!--returnDescription-->
The value.
<!--/returnDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var edmLiteral = new DevExpress.data.EdmLiteral("100000L");
    console.log(edmLiteral.valueOf()); // logs 100000L

##### Angular

    <!--TypeScript-->
    import { EdmLiteral } from "devextreme/data/odata/utils";
    // ...
    export class AppComponent {
        constructor() {
            let edmLiteral = new EdmLiteral("100000L");
            console.log(edmLiteral.valueOf()); // logs 100000L
        }
    }

---
<!--/fullDescription-->