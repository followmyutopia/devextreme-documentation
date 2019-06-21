<!--id-->dxFunnel.Options.label.customizeText<!--/id-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->function(itemInfo)<!--/type-->
===========================================================================

<!--shortDescription-->
Customizes labels' text.
<!--/shortDescription-->

<!--fullDescription-->
#include dataviz-ref-functioncontext

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/FunnelChart/jQuery/Light/"
}
<!--/fullDescription-->
<!--typeFunctionParamName1-->itemInfo<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information on the funnel item.
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

<!--typeFunctionReturnType-->String<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The text for the label to display.
<!--/typeFunctionReturnDescription-->