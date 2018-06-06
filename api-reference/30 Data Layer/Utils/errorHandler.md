===========================================================================
<!--module-->data/errors<!--/module-->
<!--export-->errorHandler<!--/export-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the function that is executed when a data layer object throws an error.
<!--/shortDescription-->

<!--fullDescription-->

    <!--JavaScript-->
    DevExpress.data.errorHandler = function (error) {
        console.log(error.message);
    };

#####See Also#####
- [Handling Errors](/Documentation/Guide/Data_Layer/Data_Layer/#Handling_Errors)
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Error<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
A JavaScript **Error** object.
<!--/typeFunctionParamDescription1-->
