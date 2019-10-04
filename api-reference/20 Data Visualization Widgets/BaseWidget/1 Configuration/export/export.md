---
id: BaseWidget.Options.export
type: Object
---
---
##### shortDescription
Configures the exporting and printing features.

---
These features allow a user to export your widget into a document or print it. When exporting is [enabled]({basewidgetpath}/Configuration/export#enabled), the "Exporting/Printing" button appears in the widget. A click on it invokes a drop-down menu that lists exporting and printing commands. The following formats are supported for exporting into: PNG, PDF, JPEG, SVG and GIF.

[note]**Safari on Mac OS** does not implement an API for saving files. Therefore, exporting in these browsers requires setting up a server-side proxy. For details, refer to the [proxyUrl]({basewidgetpath}/Configuration/export#proxyUrl) option description.

#####See Also#####
- [exportTo(fileName, format)]({basewidgetpath}/Methods/#exportTofileName_format)
- [print()]({basewidgetpath}/Methods/#print)
- [DevExpress.viz.exportWidgets(widgetInstances, options)](/Documentation/ApiReference/Common/utils/viz/#exportWidgetswidgetInstances_options)
