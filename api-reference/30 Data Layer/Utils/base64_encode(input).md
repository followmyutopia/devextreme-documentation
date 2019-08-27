---
id: Utils.base64_encode(input)
module: data/utils
export: base64_encode
---
---
##### shortDescription
Encodes a string or array of bytes in <a href="https://en.wikipedia.org/wiki/Base64" target="_blank">Base64</a>.

##### return: String
A Base64-encoded string.

##### param(input): String | Array<Number>
A string or array of bytes to be encoded.

---
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