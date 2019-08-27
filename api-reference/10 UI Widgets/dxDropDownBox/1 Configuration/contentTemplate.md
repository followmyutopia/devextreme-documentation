---
id: dxDropDownBox.Options.contentTemplate
type: template
default: 'content'
---
---
##### shortDescription
Specifies a custom template for the drop-down content.

##### param(templateData): Object
Data associated with the widget.

##### field(templateData.component): dxDropDownBox
The widget's instance.

##### field(templateData.value): any
The currently selected value.

##### param(contentElement): dxElement
#include common-ref-elementparam with { element: "widget content" }

##### return: String | Node | jQuery
A template name or container.

---
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/DropDownBox/SingleSelection/jQuery/Light/"
}

#####See Also#####
- [DropDownBox - Overview](/Documentation/Guide/Widgets/DropDownBox/Overview/)
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)