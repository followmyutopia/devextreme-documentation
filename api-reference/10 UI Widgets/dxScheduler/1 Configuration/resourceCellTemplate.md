---
id: dxScheduler.Options.resourceCellTemplate
type: template
default: null
---
---
##### shortDescription
Specifies a custom template for resource headers.

##### param(itemData): Object
The current resource header's data.

##### param(itemIndex): Number
The current resource header's index.

##### param(itemElement): dxElement
#include common-ref-elementparam with { element: "resource header" }

##### return: String | Node | jQuery
A template name or container.

---
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-scheduler-cell_templates"
}

#####See Also#####
- [Customize Resource Headers](/Documentation/Guide/Widgets/Scheduler/Resources/Customize_Resource_Headers/)
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)