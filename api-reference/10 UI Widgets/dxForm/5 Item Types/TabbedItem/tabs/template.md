---
id: dxFormTabbedItem.tabs.template
type: template
default: undefined
---
---
##### shortDescription
The template to be used for rendering the tab content.

##### param(tabData): Object
A data object associated with the tab.

##### param(tabIndex): Number
The index of the tab in the [tabs](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/tabs/) array.

##### param(tabElement): dxElement
#include common-ref-elementparam with { element: "tab content" }

---
[note]A binding context of an item template is the data source object that corresponds to the currently rendered item. So, you can bind template elements to the item object's fields directly. To access another binding context within an item template, use <a href="http://knockoutjs.com/documentation/binding-context.html" target="_blank">Knockout</a>/<a href="https://docs.angularjs.org/guide/scope" target="_blank">AngularJS</a> binding variables.

#####See Also#####
- [Custom Content within a Tab](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Tabs/#Custom_Content_within_a_Tab)
- [template](/Documentation/ApiReference/Common/Object_Structures/template/)