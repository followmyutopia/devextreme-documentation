<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Encapsulates all required logic for accessing a single Entity via OData (ref to odata.org) sevices protocol. For working with the whole service, see ODataContext.<!--/d-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_data_odata_store">data/odata/store</a><!--/module-->
<!--type-->object<!--/type-->
<!--inherits-->..\Store\Store.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
A [Store](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores) providing access to a separate [OData](http://www.odata.org) web service entity.
<!--/shortDescription-->

<!--fullDescription-->
To access the entire OData service, use the [ODataContext](/Documentation/ApiReference/Data_Layer/ODataContext/) object.

If you need to create a separate ODataStore instance, call the ODataStore constructor and specify the URL of the required entity via the [url](/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#url) configuration option.

    <!--JavaScript-->
    var store = new DevExpress.data.ODataStore({
        url: "/url/to/service",
        key: "CategoryID",
        keyType: "Int32"
    });

Note that the [key](/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#key) and [keyType](/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#keyType) configuration options provide read-write access to the entity.

For more information on working with OData web services, refer to the [Data Source Examples](/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData) article.
<!--/fullDescription-->