<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
<!--module-->localization<!--/module-->
<!--export-->loadMessages<!--/export-->
===================================================================

<!--shortDescription-->
Loads DevExtreme messages.
<!--/shortDescription-->

<!--paramName1-->messages<!--/paramName1-->
<!--paramType1-->object<!--/paramType1-->
<!--paramDescription1-->
An object containing messages to load.
<!--/paramDescription1-->

<!--fullDescription-->
The object passed to this method should have the following structure. The first level keys are locale identifiers, which hold an object consisting of key-value pairs.

    <!--JavaScript-->
    {
        "en": {
            "Yes": "Yes",
            "No": "No",
            . . .
        },
        "es": {
            "Yes": "Si",
            "No": "No",
            . . .
        }
    }

[note] This method should be called only once - at the application's launch. It is necessary to reload the page each time you need to load new messages.
<!--/fullDescription-->