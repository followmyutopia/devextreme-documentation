---
id: dxScheduler.Options.views.dateCellTemplate
type: template
default: null
---
---
##### shortDescription
Specifies a custom template for date scale items.

##### param(itemData): Object
The data of the current date scale item.

##### param(itemIndex): Number
The item's index.

##### param(itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### return: String | Node | jQuery
A template name or container.

---
[note] There is no **dateCellTemplate** in such views as "day" and "timelineDay".

#####See Also#####
- [Customize Individual Views](/Documentation/Guide/Widgets/Scheduler/Views/Customize_Individual_Views/)
- [Timetable](/Documentation/Guide/Widgets/Scheduler/Timetable/)