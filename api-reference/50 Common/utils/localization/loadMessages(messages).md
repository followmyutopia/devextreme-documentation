===================================================================
<!--module-->localization<!--/module-->
<!--export-->loadMessages<!--/export-->
===================================================================

<!--shortDescription-->
Loads localized messages.
<!--/shortDescription-->

<!--paramName1-->messages<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
The messages to be loaded.
<!--/paramDescription1-->

<!--fullDescription-->

---
##### jQuery

    <!--JavaScript-->
    DevExpress.localization.loadMessages({
        "en": {
            "Yes": "Yes",
            "No": "No",
            // ...
        },
        "es": {
            "Yes": "Si",
            "No": "No",
            // ...
        }
    });

##### Angular

    <!--TypeScript-->
    import { localization } from "devextreme";
    // ...
    export class AppComponent {
        constructor() {
            localization.loadMessages({
                "en": {
                    "Yes": "Yes",
                    "No": "No",
                    // ...
                },
                "es": {
                    "Yes": "Si",
                    "No": "No",
                    // ...
                }
            });
        }
    }

---

[note]It is necessary to reload the page each time you load new messages.
<!--/fullDescription-->
