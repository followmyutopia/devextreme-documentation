<!--id-->dxFunnel.Options.tooltip.customizeTooltip<!--/id-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->function(info)<!--/type-->
===========================================================================

<!--shortDescription-->
Customizes a specific tooltip's appearance.
<!--/shortDescription-->

<!--fullDescription-->
Set this option to a function that returns an object with the following fields:

- **color**        
Colors the tooltip.

- **text**        
Specifies the tooltip's text.

- **html**        
Specifies the HTML markup the tooltip displays.

    [note]If you are going to use external resources (for example, images) in the markup, specify the size of the area they occupy beforehand.

- **fontColor**        
Colors the tooltip's text.

- **borderColor**        
Colors the tooltip's border.

#include dataviz-ref-functioncontext
<!--/fullDescription-->
<!--typeFunctionParamName1-->info<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information on the funnel item being pressed or hovered over with the mouse pointer.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->item<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->dxFunnelItem<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The [Item](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Item/) object.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->value<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->Number<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The raw item value.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->valueText<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->String<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The item's [formatted](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/label/#format) value converted to a string.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->percent<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Number<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The item's percentage value.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->percentText<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->String<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The item's [formatted](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/label/#format) percentage value converted to a string.
<!--/typeFunctionParamDescription1_field5-->

<!--typeFunctionReturnType-->Object<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The tooltip's text or markup and appearance settings.
<!--/typeFunctionReturnDescription-->