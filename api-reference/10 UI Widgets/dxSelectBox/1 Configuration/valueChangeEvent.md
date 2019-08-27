---
id: dxSelectBox.Options.valueChangeEvent
type: String
default: 'change'
---
---
##### shortDescription
Specifies the <a href="https://en.wikipedia.org/wiki/DOM_events" target="_blank">DOM events</a> after which the widget's [value]({basewidgetpath}/Configuration/#value) should be updated. Applies only if [acceptCustomValue]({basewidgetpath}/Configuration/#acceptCustomValue) is set to **true**.

---
This option accepts a single event name or several names separated by spaces.

The recommended events are "keyup", "blur", "change", and "focusout", but you can use other events as well.