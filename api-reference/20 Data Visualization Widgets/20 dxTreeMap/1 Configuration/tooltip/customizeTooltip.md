<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
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

When implementing a callback function for this option, you can use the value of the node that has entered the hover state. This value can be accessed using the object passed as the function's parameter or the **this** object.
<!--/fullDescription-->
<!--typeFunctionParamName1-->info<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the node that has entered the hover state.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->value<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->Number<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The value of the node from the data source.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->valueText<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->string<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The value of the node with applied [formatting](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tooltip/#format).
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->node<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->dxtreemapnode<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The node that has entered the hover state.
<!--/typeFunctionParamDescription1_field3-->

<!--typeFunctionReturnType-->object<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The text or markup to be displayed in a tooltip, along with that tooltip's color.
<!--/typeFunctionReturnDescription-->