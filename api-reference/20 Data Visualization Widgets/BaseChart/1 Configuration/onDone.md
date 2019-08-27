---
id: BaseChart.Options.onDone
type: function(e)
default: null
EventForAction: BaseChart.done
---
---
##### shortDescription
A function that is executed when all series are ready.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### notUsedInTheme

---
#####See Also#####
- [getAllSeries()]({basewidgetpath}/Methods/#getAllSeries)
- [getSeriesByName(seriesName)]({basewidgetpath}/Methods/#getSeriesByNameseriesName)
- [getSeriesByPos(seriesIndex)]({basewidgetpath}/Methods/#getSeriesByPosseriesIndex)