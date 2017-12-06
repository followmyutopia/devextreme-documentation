===========================================================================
<!--module-->data/errors<!--/module-->
<!--export-->errorHandler<!--/export-->
<!--type-->function(e)<!--/type-->
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
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Error<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The JavaScript **Error** object.
<!--/typeFunctionParamDescription1-->
