===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->function(info)<!--/type-->
===========================================================================

<!--shortDescription-->
Customizes link tooltips' appearance.
<!--/shortDescription-->

<!--fullDescription-->
This function should return an object with the following fields:

- **color**        
Colors the current tooltip.

- **text**        
Specifies the tooltip's text.

- **html**        
Specifies the HTML markup the tooltip displays.

    [note] If you are going to use external resources in the markup (for example, images), specify the size of the area they occupy beforehand.

- **fontColor**        
Colors the tooltip's text.

- **borderColor**        
Colors the tooltip's border.

<!--/fullDescription-->
<!--typeFunctionParamName1-->info<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about a sankey link being pressed or hovered over.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->source<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->String<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The title of the link's source node. 
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->target<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->String<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The title of the link's target node. 
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->weight<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Number<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The link's weight.
<!--/typeFunctionParamDescription1_field3-->

<!--typeFunctionReturnType-->Object<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The current tooltip's text or markup and appearance settings.
<!--/typeFunctionReturnDescription-->