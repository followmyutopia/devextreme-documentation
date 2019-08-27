---
id: dxButton.Options.template
type: template
default: 'content'
---
---
##### shortDescription
Specifies a custom template for the **Button** widget.

##### param(buttonData): Object
The button's data.

##### field(buttonData.icon): String
The button's icon.

##### field(buttonData.text): String
The button's text.

##### param(contentElement): dxElement
#include common-ref-elementparam with { element: "button content" }

##### return: String | Node | jQuery
A template name or container.

---
#####See Also#####
- [Customize the Appearance](/Documentation/Guide/Widgets/Button/Customize_the_Appearance/)
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)