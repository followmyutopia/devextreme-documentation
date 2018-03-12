===========================================================================
<!--default-->null<!--/default-->
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom template for the drop-down content.
<!--/shortDescription-->

<!--fullDescription-->
The **templateData** object has the following fields:

- **value**: <font size="-1">Any</font>    
    The currently selected value.  
- **component**: <font size="-1">Object</font>  
    The widget's instance.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/DropDownBox/SingleSelection/jQuery/Light/"
}

#####See Also#####
- [DropDownBox - Overview](/Documentation/Guide/Widgets/DropDownBox/Overview/)
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
<!--/fullDescription-->
<!--typeFunctionParamName1-->templateData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Data associated with the widget.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->dxDropDownBox<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->

<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->value<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->any<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->

<!--/typeFunctionParamDescription1_field2-->

<!--typeFunctionParamName2-->contentElement<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->dxElement<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The widget's content. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->String|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or container.
<!--/typeFunctionReturnDescription-->