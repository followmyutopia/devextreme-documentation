===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->function(itemInfo)<!--/type-->
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
The group's index.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->color<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->string<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The legend item's color. This field is **undefined** if the [source](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#source) is *'markerSizeGroups'*.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->size<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->number<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The diameter of the legend item in pixels. This field is **undefined** if the [source](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#source) is *'areaColorGroups'* or *'markerColorGroups'*.
<!--/typeFunctionParamDescription1_field5-->

<!--typeFunctionReturnType-->string<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The text for the legend item to display.
<!--/typeFunctionReturnDescription-->