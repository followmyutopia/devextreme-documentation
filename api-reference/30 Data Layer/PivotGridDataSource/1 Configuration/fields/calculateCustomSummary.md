===========================================================================
<!--type-->function(options)<!--/type-->
===========================================================================

<!--shortDescription-->
Allows you to use a custom aggregate function to calculate the summary values. Cannot be used for the [XmlaStore](/Documentation/ApiReference/Data_Layer/XmlaStore/) store type.
<!--/shortDescription-->

<!--fullDescription-->
If [predefined aggregate functions](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryType) do not meet your requirements, implement a custom one and assign it to the **calculateCustomSummary** option. If the **summaryType** property is set to *'custom'*, this function will be called for each value from the data field.

The calculation of a summary value is conducted in several phases. Usually, you need to initialize **totalValue** on start. Then, you modify **totalValue** in the calculation phase. In the final phase, you adjust **totalValue**. To identify the current phase, use the **summaryProcess** field of the object passed as a parameter.

The following code demonstrates a general structure of the **calculateCustomSummary** function.

    <!--JavaScript-->var pivotGridOptions = {
        dataSource: {
            //...
            fields: [{
                //...
                summaryType: 'custom',
                calculateCustomSummary: function (options) {
                    if (options.summaryProcess == 'start') {
                        // Initializing "totalValue" here
                    }
                    if (options.summaryProcess == 'calculate') {
                        // Modifying "totalValue" here
                    }
                    if (options.summaryProcess == 'finalize') {
                        // Assigning the final value to "totalValue" here
                    }
                }
            },
            //...
            ]
        }
    }

<!--/fullDescription-->
<!--typeFunctionParamName1-->options<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Summary information.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->summaryProcess<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->String<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Indicates the stage of the summary value calculation; possible values are *'start'*, *'calculate'* or *'finalize'*.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->value<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->any<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The data value for aggregation.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->totalValue<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->any<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The resulting summary value.
<!--/typeFunctionParamDescription1_field3-->
