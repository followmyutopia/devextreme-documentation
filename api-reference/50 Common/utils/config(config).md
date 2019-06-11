<!--id-->config(config)<!--/id-->
===================================================================
<!--module-->core/config<!--/module-->
<!--export-->default<!--/export-->
===================================================================

<!--shortDescription-->
Configures your application before its launch. 
<!--/shortDescription-->

<!--paramName1-->config<!--/paramName1-->
<!--paramType1-->globalConfig<!--/paramType1-->
<!--paramDescription1-->
Global configuration options.
<!--/paramDescription1-->

<!--fullDescription-->
  
    DevExpress.config({
        rtlEnabled: true,
        forceIsoDateParsing: false,
        // ...
    });
    // ===== or when using modules =====
    import config from "devextreme/core/config";
    
    config({
        rtlEnabled: true,
        forceIsoDateParsing: false,
        // ...
    })

[note] This method should be called only once - at the application's launch. It is necessary to reload the page each time you need to apply new global configuration parameters.
<!--/fullDescription-->