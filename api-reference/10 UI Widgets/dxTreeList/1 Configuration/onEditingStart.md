---
id: dxTreeList.Options.onEditingStart
type: function(e)
default: null
EventForAction: dxTreeList.editingStart
---
---
##### shortDescription
A function that is executed before a cell or row switches to the editing state.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
Allows you to cancel row editing.

##### field(e.column): Object
The [configuration](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/) of the column whose cell is switching to the editing state. Available in *"cell"* or *"batch"* [editing mode](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#mode).

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.data): Object
The data of the row to be edited.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.key): any
The row's key.     
The key of an added but not yet saved row is **undefined**.

##### field(e.model): Object
The model data. Available only if Knockout is used.

---
If the **editing**.[mode](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#mode) is *"batch"* or *"cell"*, this function is executed while the widget renders columns of `boolean` [dataType](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#dataType) and other columns whose [showEditorAlways](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#showEditorAlways) option is **true**.