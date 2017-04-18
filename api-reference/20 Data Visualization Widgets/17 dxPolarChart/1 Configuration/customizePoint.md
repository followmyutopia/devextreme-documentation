<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Custom style of individual point<!--/d-->
===========================================================================
<!--type-->function(pointInfo)<!--/type-->
<!--fp1d-->Information on the point to be customized<!--/fp1d-->
<!--frd--> A configuration object for the point<!--/frd-->
===========================================================================

<!--shortDescription-->
Specifies a callback function that returns an object with options for a specific point.
<!--/shortDescription-->

<!--fullDescription-->
By default, all points on a chart are displayed identically. But you can specify different appearance for certain points using the **customizePoint** field. Assign a function to this field. This function should return an object with options that must be changed for a specific point. Refer to the [point](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/point/) object description to learn about the options that can be changed.

[note] The **hoverMode** and **selectionMode** options cannot be changed using the **customizePoint** option.

When implementing a callback function for this option, use the argument or value of a point. They can be accessed using the following fields of the function's parameter.

* **argument**    
The argument of the point.
* **value**        
The value of the point.
* **tag**    
The tag of the point.
* **seriesName**        
The name of the series to which the point belongs.
* **index**        
The index of the point in the points array.


In addition, these values can be accessed using the **this** object.

<!--/fullDescription-->
<!--typeFunctionParamName1-->pointInfo<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information on the point to be customized
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->Point configuration<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A configuration object for the point
<!--/typeFunctionReturnDescription-->

<!--handmade-->
<!--/handmade-->