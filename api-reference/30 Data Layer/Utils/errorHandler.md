<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Global handler for all data-related errors. Error handler function accepts a single argument which is Error object.<!--/d-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_data_errors">data/errors</a><!--/module-->
<!--export-->errorHandler<!--/export-->
<!--type-->function<!--/type-->
===========================================================================

<!--shortDescription-->
The global data layer error handler.
<!--/shortDescription-->

<!--fullDescription-->
This utility property takes on an error handling function, which is executed when any error occurs within the data layer. The function passed to this property takes on the JavaScript **Error** object as a parameter.

    <!--JavaScript-->
    DevExpress.data.errorHandler = function(error) {
        console.log(error.message);
    };

For more information on handling errors, refer to the [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/#Handling_Errors) article.
<!--/fullDescription-->