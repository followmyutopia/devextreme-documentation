<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->function(pointInfo)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a callback function that returns the text to be displayed by point labels.
<!--/shortDescription-->

<!--fullDescription-->
When implementing a callback function for this property, use the point value to be displayed in a label. In addition, you can use the argument of the currently displayed value. These values can be accessed using the following properties of the **this** object.

* **originalValue**    
Specifies the value of the currently represented point as it is set in the data source.
* **value**   
Specifies the value of the currently represented point. Differs from the **originalValue** when the axis' [value type](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#valueType) differs from the value type in the data source. In this instance, **value** has the type of the value axis.
* **valueText**   
Specifies the value of the currently represented point with applied formatting if the **format** property is specified (see [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonSeriesSettings/label/)).
* **originalArgument**    
Specifies the argument value of the currently represented point as it is set in the data source.
* **argument**   
Specifies the argument value of the currently represented point. Differs from the **originalArgument** when the axis' [argument type](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#argumentType) differs from the argument type in the data source. In this instance, **argument** has the type of the argument axis.
* **argumentText**   
Specifies the argument value of the currently represented point with applied formatting if the **argumentFormat** property is specified.
* **size** (for bubble series only)   
Specifies the size of the currently represented bubble as it is set in the data source.
* **index** (for range area and range bar series only)        
Specifies whether the currently represented point is maximum (index = 1) or minimum (index = 0).
* **point**    
Provides access to the currently represented point. To learn more about the field and methods of the point object, refer to the [Point](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Point/) topic in the "Chart Elements" reference section.
* **seriesName**   
Specifies the series of the currently represented point.


The function's parameter represents the same object as the **this** object. If appropriate, you can use the function's parameter to obtain the value that is currently represented by a label.

To get general information on data formatting, refer to the [Data Formatting](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/) topic.
<!--/fullDescription-->
<!--typeFunctionParamName1-->pointInfo<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information on the series point.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->string<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The text for the label to display.
<!--/typeFunctionReturnDescription-->