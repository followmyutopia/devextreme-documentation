<!--id-->Utils.base64_encode(input)<!--/id-->
===================================================================
<!--module-->data/utils<!--/module-->
<!--export-->base64_encode<!--/export-->
===================================================================

<!--shortDescription-->
Encodes a string or array of bytes in <a href="https://en.wikipedia.org/wiki/Base64" target="_blank">Base64</a>.
<!--/shortDescription-->

<!--paramName1-->input<!--/paramName1-->
<!--paramType1-->String|Array<Number><!--/paramType1-->
<!--paramDescription1-->
A string or array of bytes to be encoded.
<!--/paramDescription1-->

<!--returnType-->String<!--/returnType-->
<!--returnDescription-->
A Base64-encoded string.
<!--/returnDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var base64str = DevExpress.data.base64_encode("test");
    
##### Angular

    <!--TypeScript-->
    import { base64_encode } from "devextreme/data/utils";
    // ...
    export class AppComponent {
        constructor () {
            let base64str = base64_encode("test");
        }
    }

---
<!--/fullDescription-->