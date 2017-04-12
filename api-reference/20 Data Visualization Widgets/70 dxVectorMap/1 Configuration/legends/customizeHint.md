<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->function(itemInfo)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies text for a hint that appears when a user hovers the mouse pointer over the text of a legend item.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts a function that must return the required text. When implementing this function, use its parameter to access information on the legend item.

[note]If you have not provided text for legend items using the [customizeText](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#customizeText) option, hints will not appear.
<!--/fullDescription-->
<!--typeFunctionParamName1-->itemInfo<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information on a legend item.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->start<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->number<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The start value of the group indicated by the legend item.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->end<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->number<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The end value of the group indicated by the legend item.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->index<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->number<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The index of the group indicated by the legend item.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->color<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->string|undefined<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The color of the legend item. This field is <i>undefined</i> if the <a href="/Documentation/17_1/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#source">source</a> is <i>'markerSizeGroups'</i>.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->size<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->number|undefined<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The diameter of the legend item in pixels. This field is <i>undefined</i> if the <a href="/Documentation/17_1/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#source">source</a> is <i>'areaColorGroups'</i> or <i>'markerColorGroups'</i>.
<!--/typeFunctionParamDescription1_field5-->

<!--typeFunctionReturnType-->string<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
Text for the hint of the legend item.
<!--/typeFunctionReturnDescription-->