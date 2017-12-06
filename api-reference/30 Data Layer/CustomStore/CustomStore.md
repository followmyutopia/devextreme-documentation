===========================================================================
<!--module-->data/custom_store<!--/module-->
<!--export-->default<!--/export-->
<!--type-->Object<!--/type-->
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

For more information on creating a CustomStore, refer to the [Data Source Examples](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources) topic.
<!--/fullDescription-->