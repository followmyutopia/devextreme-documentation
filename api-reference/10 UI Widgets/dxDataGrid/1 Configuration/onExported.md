---
id: dxDataGrid.Options.onExported
type: function(e)
default: null
EventForAction: dxDataGrid.exported
---
---
##### shortDescription
A function that is executed after data is exported.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if Knockout is used.

---
You can use this function with the [onExporting](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExporting) function to adjust columns before exporting. See an example in the **onExporting** description.

#####See Also#####
- [Client-Side Exporting](/Documentation/Guide/Widgets/DataGrid/Client-Side_Exporting/)
- [customizeExportData](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#customizeExportData)
- [onFileSaving](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onFileSaving)