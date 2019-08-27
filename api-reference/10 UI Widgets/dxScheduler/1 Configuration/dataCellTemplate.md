---
id: dxScheduler.Options.dataCellTemplate
type: template
default: null
---
---
##### shortDescription
Specifies a custom template for table cells.

##### param(itemData): Object
The current table cell's data.

##### param(itemIndex): Number
The current table cell's index.

##### param(itemElement): dxElement
#include common-ref-elementparam with { element: "table cell" }

##### return: String | Node | jQuery
A template name or container.

---
[note]There is no **dataCellTemplate** in the [agenda](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Agenda_View) view.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-scheduler-cell_templates"
}

#####See Also#####
- [Timetable](/Documentation/Guide/Widgets/Scheduler/Timetable/)
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)