<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->A Store, whose logic is completely defined by a developer's custom functions.<!--/d-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_data_custom_store">data/custom_store</a><!--/module-->
<!--type-->object<!--/type-->
<!--inherits-->..\Store\Store.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
A [Store](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores) object that enables you to implement your own data access logic.
<!--/shortDescription-->

<!--fullDescription-->
This class requires you to implement all data access operations. Each function implementing an operation should be passed to the corresponding configuration option of the CustomStore.

    <!--JavaScript-->
    var store = new DevExpress.data.CustomStore({
        load: function(loadOptions) {
            // . . .
        },
        byKey: function(key, extra) {
            // . . .
        },
        update: function(key, values) {
            // . . .
        },
        . . .  
    });

Note that despite Store operations being asynchronous and returning the [jQuery.Deferred](http://api.jquery.com/jQuery.Deferred) promise, you do not need to create the **jQuery.Deferred** object within your function. The function should return an object compatible with **jQuery.Deferred**.

For more information on creating a CustomStore, refer to the [Data Source Examples](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources) topic.
<!--/fullDescription-->