<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->function(scaleValue)<!--/type-->
===========================================================================

<!--shortDescription-->
Allows you to change tooltip appearance.
<!--/shortDescription-->

<!--fullDescription-->
This option should be assigned a function returning a specific object. The following fields can be specified in this object.

- **color**        
Specifies the color of a tooltip.

- **text**        
Specifies the text displayed by a tooltip.

- **html**        
Specifies the HTML markup displayed by a tooltip.
[note]If you are going to use external resources (for example, images) in the markup, specify the size of the area they will occupy beforehand.

- **fontColor**        
Specifies the color of the text displayed by a tooltip.

- **borderColor**        
Specifies the color of the tooltip border.

When implementing a callback function for this option, you can use the value indicated by a bar. This value can be accessed using the object passed as the function's parameter or the **this** object.

To review text customization in greater detail, refer to the [Customize Text](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Data_Formatting/#Customize_Text) topic.
<!--/fullDescription-->
<!--typeFunctionParamName1-->scaleValue<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Defines a value indicated by a bar.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->value<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->Number<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The value as it was specified in the <a href="/Documentation/17_2/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/#values">values</a> array.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->valueText<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->string<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The value with applied <a href="/Documentation/17_2/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/tooltip/#format">formatting</a>.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->index<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->number<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
A zero-based index of the hovered bar. The closer this bar is to the gauge's center, the greater its index.
<!--/typeFunctionParamDescription1_field3-->

<!--typeFunctionReturnType-->object<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The text or markup to be displayed in a tooltip, along with that tooltip's color.
<!--/typeFunctionReturnDescription-->