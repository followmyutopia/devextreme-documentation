---
id: BaseWidget.Options.redrawOnResize
type: Boolean
default: true
notUsedInTheme: 
---
---
##### shortDescription
Specifies whether to redraw the widget when the size of the parent browser window changes or a mobile device rotates.

---
When this option is set to _true_, the widget will be redrawn automatically in case the size of its parent window changes.

[note]To redraw the widget after the size of its container has changed, call the [render()]({basewidgetpath}/Methods#render) method of the widget's instance.