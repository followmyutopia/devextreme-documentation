===================================================================
<!--module-->localization<!--/module-->
<!--export-->formatNumber<!--/export-->
===================================================================

<!--shortDescription-->
Converts a numeric value to a string using the specified format.
<!--/shortDescription-->

<!--paramName1-->value<!--/paramName1-->
<!--paramType1-->Number<!--/paramType1-->
<!--paramDescription1-->
A numeric value to be converted.
<!--/paramDescription1-->

<!--paramName2-->format<!--/paramName2-->
<!--paramType2-->format<!--/paramType2-->
<!--paramDescription2-->
The [format](/Documentation/ApiReference/Common/Object_Structures/format/) to be used for conversion.
<!--/paramDescription2-->

<!--returnType-->String<!--/returnType-->
<!--returnDescription-->
The formatted string.
<!--/returnDescription-->

<!--fullDescription-->

---
##### jQuery

    <!--JavaScript-->
    var numberString = DevExpress.localization.formatNumber(0.25, "percent");
    console.log(numberString); // logs "25%"

##### Angular

    <!--TypeScript-->
    import { formatNumber } from "devextreme/localization";
    // ...
    export class AppComponent {
        constructor() {
            let numberString = formatNumber(0.25, "percent");
            console.log(numberString); // logs "25%"
        }
    }

---
<!--/fullDescription-->