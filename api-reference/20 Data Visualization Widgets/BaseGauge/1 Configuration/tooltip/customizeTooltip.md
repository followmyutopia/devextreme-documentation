<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Tooltip custom format, color, borderColor and fontColor function. Return object  {color: string; text:string; fontColor: string; borderColor: string}<!--/d-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->function(scaleValue)<!--/type-->
<!--fp1d-->Defines a scale value to be displayed in a tooltip.<!--/fp1d-->
<!--fp1_field1d-->Specifies the scale value represented by a tooltip.<!--/fp1_field1d-->
<!--fp1_field2d-->Specifies the scale value with an applied format, if the format and precision (optional) properties are specified.<!--/fp1_field2d-->
<!--frd-->Specifies the text to be displayed in a tooltip and a color for the tooltip.<!--/frd-->
===========================================================================

<!--shortDescription-->
Allows you to change the appearance of specified tooltips.
<!--/shortDescription-->

<!--fullDescription-->
This option should be assigned a function returning a specific object. The following fields can be specified in this object.

- **color**		
Specifies the color of a tooltip.

- **borderColor**		
Specifies the color of the tooltip's border.

- **fontColor**		
Specifies the color of the tooltip's text.

- **text**		
Specifies the text displayed by a tooltip.

- **html**		
Specifies the HTML markup displayed by a tooltip.
[note]If you are going to use external resources (for example, images) in the markup, specify the size of the area they will occupy beforehand.

When implementing the function for this option, you can access the scale value represented by a tooltip. This value can be accessed using the fields of the object that is passed as the function's parameter. Alternatively, you can use the **this** object within the function. This object has the same structure as the object passed as a parameter.

To get general information on data formatting, refer to the [Data Formatting](/Documentation/Guide/Data_Visualization/Common/Data_Formatting/) topic.
<!--/fullDescription-->
<!--typeFunctionParamName1-->scaleValue<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The scale value to be displayed in the tooltip.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->value<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->Number<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The scale value.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->valueText<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->string<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The scale value with applied format.
<!--/typeFunctionParamDescription1_field2-->

<!--typeFunctionReturnType-->object<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
Settings to be applied to the tooltip.
<!--/typeFunctionReturnDescription-->