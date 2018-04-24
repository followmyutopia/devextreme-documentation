===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->function(pointInfo)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a callback function that returns the text to be displayed by point labels.
<!--/shortDescription-->

<!--fullDescription-->
When implementing a callback function for this property, use the point value to be displayed in a label. In addition, you can use the argument of the currently displayed value. These values can be accessed using the following properties of the **this** object.

* **value**   
Specifies the value of the currently represented point.
* **valueText**   
Specifies the value of the currently represented point with applied formatting if the [format](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/#format) property is specified.
* **argument**   
Specifies the argument value of the currently represented point.
* **argumentText**   
Specifies the argument value of the currently represented point with applied formatting if the [argumentFormat](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/#argumentFormat) property is specified.
* **percent**    
Specifies the proportional value of the currently represented point in a floating point format.
* **percentText**    
Specifies the value of the currently represented point as a percentage with a precision of the **format**.**percentPrecision** option.
* **point.tag**        
Specifies the tag of the currently represented point.

#include dataviz-ref-functioncontext

#####See Also#####
- [Data Formatting](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/)
<!--/fullDescription-->
<!--typeFunctionParamName1-->pointInfo<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information on the series point.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->String<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The text for the label to display.
<!--/typeFunctionReturnDescription-->