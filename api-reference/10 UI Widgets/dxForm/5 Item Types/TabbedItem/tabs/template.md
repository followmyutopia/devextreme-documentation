<!--id-->dxFormTabbedItem.tabs.template<!--/id-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
The template to be used for rendering the tab content.
<!--/shortDescription-->

<!--fullDescription-->
[note]A binding context of an item template is the data source object that corresponds to the currently rendered item. So, you can bind template elements to the item object's fields directly. To access another binding context within an item template, use [Knockout](http://knockoutjs.com/documentation/binding-context.html)/[AngularJS](https://docs.angularjs.org/guide/scope) binding variables.

#####See Also#####
- [Custom Content within a Tab](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Tabs/#Custom_Content_within_a_Tab)
- [template](/Documentation/ApiReference/Common/Object_Structures/template/)
<!--/fullDescription-->
<!--typeFunctionParamName1-->tabData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
A data object associated with the tab.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->tabIndex<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->Number<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The index of the tab in the [tabs](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/tabs/) array.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionParamName3-->tabElement<!--/typeFunctionParamName3-->
<!--typeFunctionParamType3-->dxElement<!--/typeFunctionParamType3-->
<!--typeFunctionParamDescription3-->
The tab content's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription3-->
