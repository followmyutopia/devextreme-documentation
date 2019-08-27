---
id: BaseChart.Options.onPointSelectionChanged
type: function(e)
EventForAction: BaseChart.pointSelectionChanged
---
---
##### shortDescription
A function that is executed when a series point is selected or selection is canceled.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget's instance.

##### field(e.element): Object
The widget's container.

##### field(e.target): basePointObject
The series point whose selection state has been changed; described in the [Point]({basewidgetpath}/Chart_Elements/Point/) section.

##### notUsedInTheme

---
To identify whether the selection has been applied or canceled, call the point's [isSelected()]({basewidgetpath}/Chart_Elements/Point/Methods/#isSelected) method.