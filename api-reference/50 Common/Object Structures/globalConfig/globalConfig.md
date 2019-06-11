<!--id-->globalConfig<!--/id-->
===========================================================================
<!--module-->core/config<!--/module-->
<!--export-->default<!--/export-->
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies settings that affect all DevExtreme widgets.
<!--/shortDescription-->

<!--fullDescription-->
Pass this object to the [DevExpress.config(globalConfig)](/Documentation/ApiReference/Common/utils/#configglobalConfig) method to apply these setting, or call the same method without argumants to get the object with current settings.

    DevExpress.config({
        rtlEnabled: true,
        forceIsoDateParsing: false,
        //...
    });
<!--/fullDescription-->