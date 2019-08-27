---
id: EdmLiteral.ctor(value)
---
---
##### shortDescription
Creates an **EdmLiteral** instance with a new value.

##### param(value): String
A value in a format the OData's <a href="http://www.odata.org/documentation/odata-version-2-0/overview/#AbstractTypeSystem" target="_blank">Abstract Type System</a> defines.

---
---
##### jQuery

    <!--JavaScript-->
    var edmLiteral = new DevExpress.data.EdmLiteral("100000L");

##### Angular

    <!--TypeScript-->
    import { EdmLiteral } from "devextreme/data/odata/utils";
    // ...
    export class AppComponent {
        constructor() {
            let edmLiteral = new EdmLiteral("100000L");
        }
    }

---