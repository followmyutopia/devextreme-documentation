<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_core_config">core/config</a><!--/module-->
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

- **rtlEnabled** - Specifies whether or not the application supports a right-to-left representation.  
  By default, rtlEnabled is set to *false*.

- **defaultCurrency** - Specifies the default currency used in the application.  
  By default, defaultCurrency is set to *'USD'*.

        <!--JavaScript-->var config = {
            rtlEnabled: true,
            defaultCurrency: "EUR"
        };
        DevExpress.config(config);

<!--/fullDescription-->