---
id: BaseChart.Options.onTooltipShown
type: function(e)
default: null
EventForAction: BaseChart.tooltipShown
---
---
##### shortDescription
A function that is executed when a tooltip appears.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): basePointObject | dxChartAnnotationConfig | any
The series point whose tooltip is shown; described in the [Point]({basewidgetpath}/Chart_Elements/Point/) section.

##### notUsedInTheme

---
#####See Also#####
- **Point**.[showTooltip()]({basewidgetpath}/Chart_Elements/Point/Methods/#showTooltip)