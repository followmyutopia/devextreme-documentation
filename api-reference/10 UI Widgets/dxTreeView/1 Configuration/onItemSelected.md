<!--dep-->onItemSelectionChanged.md<!--/dep-->
<!--EventForAction-->..\4 Events\itemSelected.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the [itemSelected](/Documentation/ApiReference/UI_Widgets/dxTreeView/Events/#itemSelected) event.
<!--/shortDescription-->

<!--fullDescription-->
Assign a function to perform a custom action when a tree view item is selected.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/navigationtreeviewtreeviewselectionandcustomization/"
}
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->DOMComponent<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if Knockout is used.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field7-->itemElement<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->dxElement<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The selected item's container.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->node<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->dxTreeViewNode<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The selected item's node.
<!--/typeFunctionParamDescription1_field8-->
