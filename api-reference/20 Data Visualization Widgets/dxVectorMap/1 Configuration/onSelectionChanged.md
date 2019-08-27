---
id: dxVectorMap.Options.onSelectionChanged
type: function(e)
default: null
EventForAction: dxVectorMap.selectionChanged
---
---
##### shortDescription
A function that is executed when a layer element is selected or selection is canceled.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): MapLayerElement
The selected/deselected layer element; described in the [Layer Element](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/) section.

##### notUsedInTheme

---
To identify whether the selection has been applied or canceled, call the layer element's [selected()](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/Methods/#selected) method.