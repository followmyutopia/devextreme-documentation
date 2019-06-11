<!--id-->dxSankey.Options.tooltip.customizeNodeTooltip<!--/id-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->function(info)<!--/type-->
===========================================================================

<!--shortDescription-->
Customizes node tooltips' appearance.
<!--/shortDescription-->

<!--fullDescription-->
This function should return an object with the following fields:

- **color**        
Colors the current tooltip.

- **text**        
Specifies the tooltip's text.

- **html**        
Specifies the HTML markup the tooltip displays.

    [note]If you are going to use external resources (for example, images) in the markup, specify the size of the area they occupy beforehand.

- **fontColor**        
Colors the tooltip's text.

- **borderColor**        
Colors the tooltip's border.

<!--/fullDescription-->
<!--typeFunctionParamName1-->info<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about a sankey node being pressed or hovered over.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->title<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->String<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The node's title.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->weightIn<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->Number<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The total weight of the node's incoming links.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->weightOut<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Number<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The total weight of the node's outgoing links.
<!--/typeFunctionParamDescription1_field3-->

<!--typeFunctionReturnType-->Object<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The current tooltip's text or markup and appearance settings.
<!--/typeFunctionReturnDescription-->