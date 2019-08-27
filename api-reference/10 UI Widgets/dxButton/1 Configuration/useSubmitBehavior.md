---
id: dxButton.Options.useSubmitBehavior
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether or not the button must submit an HTML form.

---
If you set this option to **true**, a click on the button will validate and submit the HTML form in which the button is nested, no further configuration required. Note that the [click](/Documentation/ApiReference/UI_Widgets/dxButton/Events/#click) event handler will be executed first.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/editors-validation-overview"
}