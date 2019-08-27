---
id: dxTreeView.Options.onSelectionChanged
type: function(e)
default: null
EventForAction: dxTreeView.selectionChanged
---
---
##### shortDescription
A function that is executed when a tree view item is selected or selection is canceled.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if Knockout is used.

---
This function is executed under one of the following conditions:

- The [selectByClick](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#selectByClick) option is set to **true**;
- The [showCheckBoxesMode](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#showCheckBoxesMode) option is not *"none"*;
- One of the following methods is called: [selectAll()](/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#selectAll), [unselectAll()](/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#unselectAll), [selectItem()](/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#selectItemitemElement), [unselectItem()](/Documentation/ApiReference/UI_Widgets/dxTreeView/Methods/#unselectItemitemElement).