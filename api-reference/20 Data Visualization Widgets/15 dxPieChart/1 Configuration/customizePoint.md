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
By default, all the points of a pie are displayed identically. But you can specify different appearance for certain points using the **customizePoint** field. Assign a function to this field. This function should return an object with options that should be changed for a certain point. The following pie options can be changed.

* [border](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Series_Types/PieSeries/border/)
* [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Series_Types/PieSeries/#color)
* [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Series_Types/PieSeries/hoverStyle/)
* [selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Series_Types/PieSeries/selectionStyle/)

When implementing a callback function for this option, use the argument or value of a point. They can be accessed using the following fields of the function's parameter.

* **argument**    
The argument of the point.
* **value**        
The value of the point.
* **tag**    
The tag of the point.
* **index**        
The index of the point in the points array.

In addition, these values can be accessed using the **this** object.
<!--/fullDescription-->
<!--typeFunctionParamName1-->pointInfo<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information on the point to be customized
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->Point<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A configuration object for the point
<!--/typeFunctionReturnDescription-->

<!--handmade-->
<!--/handmade-->