<!--id-->dxChartCommonAnnotationConfig.customizeTooltip<!--/id-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--default-->undefined<!--/default-->
<!--type-->function(annotationItem)<!--/type-->
===========================================================================

<!--shortDescription-->
Customizes the text and appearance of the annotation's tooltip.
<!--/shortDescription-->

<!--fullDescription-->
Set this option to a function that returns an object with the following fields:

- **color**        
Specifies the color that fills the tooltip.

- **text**        
Specifies the tooltip's text.

- **html**        
Specifies the HTML markup the tooltip displays.

    [note]If you are going to use external resources (for example, images) in the markup, specify the size of the area they occupy.

- **fontColor**        
Colors the tooltip's text.

- **borderColor**        
Colors the tooltip's border.

#include dataviz-ref-functioncontext

#####See Also#####
- [tooltipEnabled](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/#tooltipEnabled)
<!--/fullDescription-->
<!--typeFunctionParamName1-->annotationItem<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->dxChartAnnotationConfig|any<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The annotation's [configuration object](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/).
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->Object<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The tooltip's text or markup and appearance settings.
<!--/typeFunctionReturnDescription-->