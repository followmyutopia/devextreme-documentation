===================================================================
<!--module-->localization<!--/module-->
<!--export-->formatDate<!--/export-->
===================================================================

<!--shortDescription-->
Converts a Date object to a string using the specified format.
<!--/shortDescription-->

<!--paramName1-->value<!--/paramName1-->
<!--paramType1-->Date<!--/paramType1-->
<!--paramDescription1-->
A [Date](https://www.w3schools.com/js/js_dates.asp) object to be converted.
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
    var dateString = DevExpress.localization.formatDate(new Date(2018, 4, 7), "longDate");
    console.log(dateString); // logs "Monday, May 7, 2018"

##### Angular

    <!--TypeScript-->
    import { localization } from "devextreme";
    // ...
    export class AppComponent {
        constructor() {
            let dateString = localization.formatDate(new Date(2018, 4, 7), "longDate");
            console.log(dateString); // logs "Monday, May 7, 2018"
        }
    }

---
<!--/fullDescription-->