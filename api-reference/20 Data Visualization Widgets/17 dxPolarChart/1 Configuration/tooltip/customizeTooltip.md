<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Tooltip custom format and color function. Return object  {color: string; text:string}<!--/d-->
===========================================================================
<!--type-->function(pointInfo)<!--/type-->
<!--fp1d-->Defines the point value to be displayed in a tooltip.<!--/fp1d-->
<!--frd--> Specifies the text to be displayed in a tooltip and a color for the tooltip.<!--/frd-->
===========================================================================

<!--shortDescription-->
Allows you to change tooltip appearance.
<!--/shortDescription-->

<!--fullDescription-->
This option should be assigned a function returning a specific object. The following fields can be specified in this object.

- **color**		
Specifies the [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/tooltip/#color) of a tooltip.

- **text**		
Specifies the text displayed by a tooltip.

- **html**		
Specifies the HTML markup displayed by a tooltip.
[note]If you are going to use external resources (for example, images) in the markup, specify the size of the area they will occupy beforehand.

- **fontColor**		
Specifies the color of the text displayed by a tooltip.

- **borderColor**		
Specifies the color of the tooltip border.

When implementing the function for this option, you can use information about the tooltip's point. For example, you can access the argument or value of this point. To do this, use the following fields of the **this** object.

* **originalValue**    
Specifies the value of the currently represented point as it is set in the data source.
* **value**   
Specifies the value of the currently represented point. Differs from the **originalValue** when the axis [value type](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/#valueType) is specified explicitly. In this instance, the **value** field contains a value in the specified type.
* **valueText**   
Specifies the value of the currently hovered point with applied formatting if the **format** property is specified.
* **originalArgument**    
Specifies the argument value of the currently represented point as it is set in the data source.
* **argument**    
Specifies the argument value of the currently represented point. Differs from the **originalArgument** when the axis' [argument type](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#argumentType) differs from the argument type in the data source. In this instance, **argument** has the type of the argument axis.
* **argumentText**   
Specifies the argument value of the currently hovered point with applied formatting if the **argumentFormat** option is specified.
* **seriesName**   
Specifies the series of the currently hovered point.
* **point**    
Provides access to the hovered point. To learn more about the field and methods of the point object, refer to the [Point](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Point/) topic in the "Chart Elements" reference section.
* **points** (for shared tooltip only)    
Provides access to the array of points with the same argument as the currently hovered point. This field is accessible when the [shared](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/tooltip/#shared) option of the **tooltip** object is set to *true*. To learn more about the fields and methods of the point object, refer to the [Point](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Point/) topic in the "Chart Elements" reference section.
The function's parameter represents the same object as the **this** object. If appropriate, you can use the function's parameter to obtain the value that is currently represented by a tooltip.

To get general information on data formatting, refer to the [Data Formatting](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/) topic.
<!--/fullDescription-->
<!--typeFunctionParamName1-->pointInfo<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Defines the point that is currently hovered over.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->object<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The text or markup to be displayed in a tooltip, along with that tooltip's settings.
<!--/typeFunctionReturnDescription-->

<!--handmade-->
<!--/handmade-->