===================================================================
<!--module-->localization<!--/module-->
<!--export-->formatMessage<!--/export-->
===================================================================

<!--shortDescription-->
Substitutes the provided value(s) for placeholders in a message that the key specifies.
<!--/shortDescription-->
 
<!--paramName1-->key<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
The key that identifies the message in a dictionary.
<!--/paramDescription1-->
 
<!--paramName2-->value<!--/paramName2-->
<!--paramType2-->String|Array<String><!--/paramType2-->
<!--paramDescription2-->
One or several values used to fill placeholders in the message.
<!--/paramDescription2-->

<!--returnType-->String<!--/returnType-->
<!--returnDescription-->
The formatted message.
<!--/returnDescription-->

<!--fullDescription-->

---
##### jQuery

    <!--JavaScript-->
    // Load the "greeting" message for the "en" and "es" locales
    DevExpress.localization.loadMessages({
        "en": {
            "greeting": "Hello, {0} {1}!",
        },
        "es": {
            "greeting": "Hola, {0} {1}!",
        }
    });
    
    // Set the current locale to "en"
    DevExpress.localization.locale("en");
    console.log(DevExpress.localization.formatMessage("greeting", ["John", "Smith"])); // logs "Hello, John Smith!"

    // Set the current locale to "es"
    DevExpress.localization.locale("es");
    console.log(DevExpress.localization.formatMessage("greeting", ["John", "Smith"])); // logs "Hola, John Smith!"

##### Angular

    <!--TypeScript-->
    import { localization } from "devextreme";
    // ...
    export class AppComponent {
        constructor() {
            // Load the "greeting" message for the "en" and "es" locales
            localization.loadMessages({
                "en": {
                    "greeting": "Hello, {0} {1}!",
                },
                "es": {
                    "greeting": "Hola, {0} {1}!",
                }
            });

            // Set the current locale to "en"
            DevExpress.localization.locale("en");
            console.log(localization.formatMessage("greeting", ["John", "Smith"])); // logs "Hello, John Smith!"

            // Set the current locale to "es"
            DevExpress.localization.locale("es");
            console.log(localization.formatMessage("greeting", ["John", "Smith"])); // logs "Hola, John Smith!"
        }
    }

---
<!--/fullDescription-->
