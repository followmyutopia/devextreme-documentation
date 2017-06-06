<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
<!--module-->core/config<!--/module-->
<!--export-->default<!--/export-->
===================================================================

<!--shortDescription-->
Sets the global configuration object.
<!--/shortDescription-->

<!--paramName1-->config<!--/paramName1-->
<!--paramType1-->object<!--/paramType1-->
<!--paramDescription1-->
An object containing the required global configuration options.
<!--/paramDescription1-->

<!--fullDescription-->
The global configuration object contains the following fields:  

- **rtlEnabled**  
    Specifies whether the application supports a right-to-left representation. By default, **rtlEnabled** is set to *false*.

- **defaultCurrency**  
    Specifies the default currency used in the application. By default, **defaultCurrency** is set to *'USD'*.

- **forceIsoDateParsing**  
    Specifies whether dates are parsed and serialized according to the ISO 8601 standard in all browsers. The default value of this option is *true*. This implies that widgets detect the format of date-time values automatically. If the values are not provided to the widget yet, you need to specify the format explicitly using the widget's **dateSerializationFormat** option. When you assign *false* to the **forceIsoDateParsing**, a browser's resources are utilized to parse and serialize date-time values.

        <!--JavaScript-->var config = {
            rtlEnabled: true,
            defaultCurrency: "EUR",
            forceIsoDateParsing: false
        };
        DevExpress.config(config);

<!--/fullDescription-->