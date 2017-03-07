<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Label custom format function<!--/d-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->function(itemInfo)<!--/type-->
<!--fp1d-->Information about the legend item<!--/fp1d-->
<!--fp1_field1d-->Specifies start of the group.<!--/fp1_field1d-->
<!--fp1_field2d-->Specifies end of the group.<!--/fp1_field2d-->
<!--fp1_field3d-->Specifies index of the item.<!--/fp1_field3d-->
<!--fp1_field4d-->Specifies color of the item (for 'areaColorGroups' and 'markerColorGroups')<!--/fp1_field4d-->
<!--fp1_field5d-->Specifies size of the item (for 'markerSizeGroups')<!--/fp1_field5d-->
<!--frd-->The text to be displayed by a legend item.<!--/frd-->
===========================================================================

<!--shortDescription-->
Specifies text for legend items.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts a function that returns the text for a legend item. When implementing this function, you can access useful data on the legend item using the function's argument.
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
The color of the legend item. This field is <i>undefined</i> if the <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#source">source</a> is <i>'markerSizeGroups'</i>.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->size<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->number|undefined<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The diameter of the legend item in pixels. This field is <i>undefined</i> if the <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#source">source</a> is <i>'areaColorGroups'</i> or <i>'markerColorGroups'</i>.
<!--/typeFunctionParamDescription1_field5-->

<!--typeFunctionReturnType-->string<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
Text for the legend item.
<!--/typeFunctionReturnDescription-->