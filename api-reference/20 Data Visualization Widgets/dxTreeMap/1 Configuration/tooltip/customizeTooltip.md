===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->function(info)<!--/type-->
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

#include dataviz-ref-functioncontext
<!--/fullDescription-->
<!--typeFunctionParamName1-->info<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information on the node being pressed or hovered over with the mouse pointer.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->value<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->Number<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The raw node value.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->valueText<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->String<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The [formatted](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tooltip/#format) value converted to a string.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->node<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->dxTreeMapNode<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The [Node](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/) object.
<!--/typeFunctionParamDescription1_field3-->

<!--typeFunctionReturnType-->Object<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The tooltip's text or markup and color.
<!--/typeFunctionReturnDescription-->