---
id: dxLookup.Options.fieldTemplate
type: template
default: null
---
---
##### shortDescription
Specifies a custom template for the input field.

##### param(selectedItem): Object
The selected item's data.

##### param(fieldElement): dxElement
#include common-ref-elementparam with { element: "field" }

##### return: String | Node | jQuery
A template name or container.

---
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Lookup/Templates/jQuery/Light/"
}

#####See Also#####
- [Customize Item Appearance](/Documentation/Guide/Widgets/Lookup/Customize_the_Appearance/Customize_Item_Appearance/)
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)