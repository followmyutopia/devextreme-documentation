===========================================================================
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Fires when a tree view item is selected.
<!--/shortDescription-->

<!--fullDescription-->
Instead, you can use the [onItemSelectionChanged](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#onItemSelectionChanged) option to handle the event.

This event fires in one of the following cases.  

1. The [selectByClick](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#selectByClick) option is set to **true**.  
2. The [showCheckBoxesMode](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#showCheckBoxesMode) option is not set to *'none'*.  
3. You use one of the methods: [selectAll](/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#selectAll), [unselectAll](/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#unselectAll), [selectItem](/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#selectItemitemElement), [unselectItem](/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#unselectItemitemElement).  

#####See Also#####
#include common-link-handleevents
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
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
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if Knockout is used.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field7-->node<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->dxTreeViewNode<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The selected item's node.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->itemElement<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->dxElement<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The selected item's container.
<!--/typeFunctionParamDescription1_field8-->
