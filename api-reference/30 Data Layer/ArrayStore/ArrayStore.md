<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Data store which works purely on the client-side and stores data in-memory (in array). Data is not persisted.<!--/d-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_data_array_store">data/array_store</a><!--/module-->
<!--type-->object<!--/type-->
<!--inherits-->..\Store\Store.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
A [Store](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores) accessing an in-memory array.
<!--/shortDescription-->

<!--fullDescription-->
To associate the required array with the ArrayStore, pass this array ArrayStore constructor.

    <!--JavaScript-->
    var store = new DevExpress.data.ArrayStore(array);

If you need to specify other configuration option of the ArrayStore in addition to the data array, pass the required array to the [data](/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#data) configuration option.

    <!--JavaScript-->
    var store = new DevExpress.data.ArrayStore({
        data: array,
        key: "id",
        onModified: function() {
            // 'modified' event handler
        },
        errorHandler: function(error) {
            // Error handler
        }
    });

Note, that the [key](/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#key) option is required if you are going to use the Store for read-write access to data.

For more information on working with in-memory data, refer to the [Data Source Examples](/Documentation/Guide/Data_Layer/Data_Source_Examples/#In-memory_Data) article.
<!--/fullDescription-->