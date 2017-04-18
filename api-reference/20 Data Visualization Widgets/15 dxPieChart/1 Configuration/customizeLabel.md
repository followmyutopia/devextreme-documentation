<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Custom style of individual label<!--/d-->
===========================================================================
<!--type-->function(labelInfo)<!--/type-->
<!--fp1d-->Information on the label to be customized<!--/fp1d-->
<!--frd--> A configuration object for the label<!--/frd-->
===========================================================================

<!--shortDescription-->
Specifies a callback function that returns an object with options for a specific point label.
<!--/shortDescription-->

<!--fullDescription-->
By default, all point labels on a chart are displayed identically. But you can specify different appearance for specific labels using the **customizeLabel** field. Assign a function to this field. This function should return an object with options that should be changed for a certain label. Refer to the [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Series_Types/PieSeries/label/) object description to learn about the options that can be changed.

When implementing a callback function for this option, you can access the following fields of the function's parameter.

* **argument**    
The argument of the label's point.
* **value**        
The value of the label's point.
* **tag**    
The tag of the label's point.
* **index**        
The index of the label's point in the points array.

In addition, these values can be accessed using the **this** object.
<!--/fullDescription-->
<!--typeFunctionParamName1-->labelInfo<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information on the label to be customized
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->Label<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A configuration object for the label
<!--/typeFunctionReturnDescription-->

<!--handmade-->
<!--/handmade-->