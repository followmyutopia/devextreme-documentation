===================================================================
===================================================================

<!--shortDescription-->
Creates an **EdmLiteral** instance with a new value.
<!--/shortDescription-->

<!--paramName1-->value<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
A value in a format the OData's [Abstract Type System](http://www.odata.org/documentation/odata-version-2-0/overview/#AbstractTypeSystem) defines.
<!--/paramDescription1-->

<!--fullDescription-->
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
<!--/fullDescription-->
