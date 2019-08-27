---
id: BaseChart.Options.onPointHoverChanged
type: function(e)
EventForAction: BaseChart.pointHoverChanged
---
---
##### shortDescription
A function that is executed after the pointer enters or leaves a series point.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget's instance.

##### field(e.element): Object
The widget's container.

##### field(e.target): basePointObject
The series point whose hover state has been changed; described in the [Point]({basewidgetpath}/Chart_Elements/Point/) section.

##### notUsedInTheme

---
To identify whether the pointer has entered or left the series point, call the point's [isHovered()]({basewidgetpath}/Chart_Elements/Point/Methods/#isHovered) method.