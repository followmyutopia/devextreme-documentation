---
id: dxFunnel.Options.onSelectionChanged
type: function(e)
default: null
EventForAction: dxFunnel.selectionChanged
---
---
##### shortDescription
A function that is executed when a funnel item is selected or selection is canceled.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.item): dxFunnelItem
The [Item](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Item/) object.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### notUsedInTheme

---
To identify whether the selection has been applied or canceled, call the funnel item's [isSelected()](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Item/Methods/#isSelected) method.

See [onItemClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#onItemClick) to learn how to implement selection.

#####See Also#####
- [selectionMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#selectionMode)
- **item**.[selectionStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/item/selectionStyle/)