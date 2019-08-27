---
id: dxVectorMap.Options.onZoomFactorChanged
type: function(e)
default: null
EventForAction: dxVectorMap.zoomFactorChanged
---
---
##### shortDescription
A function that is executed each time the zoom factor is changed.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.zoomFactor): Number
The updated zoom factor.

##### notUsedInTheme

---
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/mapsvectormapvectormapviewport/"
}