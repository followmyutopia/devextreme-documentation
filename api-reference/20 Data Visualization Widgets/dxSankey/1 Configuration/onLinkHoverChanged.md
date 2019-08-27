---
id: dxSankey.Options.onLinkHoverChanged
type: function(e)
default: null
EventForAction: dxSankey.linkHoverChanged
---
---
##### shortDescription
A function that is executed after the pointer enters or leaves a sankey link.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): dxSankeyLink
The [Link](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Link/) object.

##### notUsedInTheme

---
#####See Also#####
- **link**.[hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/link/hoverStyle/)