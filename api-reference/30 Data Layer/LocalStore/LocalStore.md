<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--module-->data/local_store<!--/module-->
<!--export-->default<!--/export-->
<!--type-->object<!--/type-->
<!--inherits-->..\ArrayStore\ArrayStore.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
A [Store](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores) providing access to the HTML5 Web Storage.
<!--/shortDescription-->

<!--fullDescription-->
When creating a LocalStore instance, specify the [name](/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#name) configuration option, which is required to identify the data within the storage.

    <!--JavaScript-->
    var store = new DevExpress.data.LocalStore({
        name: "MyLocalData",
        key: "id"
    });

Note that the [key](/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#key) option is required if you are going to use the Store for read-write access to data.

For more information on working with LocalStore data, refer to the [Data Source Examples](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Local_Data) article.
<!--/fullDescription-->