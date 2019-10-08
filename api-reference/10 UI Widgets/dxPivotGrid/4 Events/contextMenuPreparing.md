---
id: dxPivotGrid.contextMenuPreparing
type: eventType
---
---
##### shortDescription
Raised before the context menu is rendered.

##### param(e): Object
Information about the event.

##### field(e.area): String
The clicked [area's](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area) type.

##### field(e.cell): dxPivotGridPivotGridCell
The cell that has been clicked to invoke the context menu.    
Unavailable for fields in the [field panel](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel).

##### field(e.cellElement): dxElement
#include common-ref-elementparam with { element: "clicked cell" } 
Unavailable for fields in the [field panel](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel).

##### field(e.columnFields): Array<PivotGridDataSource_Options_fields>
Fields in the "column" area.

##### field(e.columnIndex): Number
The index of the column to which the clicked cell belongs.    
Unavailable for fields in the [field panel](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel).

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.dataFields): Array<PivotGridDataSource_Options_fields>
Fields in the "data" area.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.field): PivotGridDataSource_Options_fields
This field's [configuration](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/).    
Available for fields in the [field panel](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel) only.

##### field(e.items): Array<Object>
An array of items to be displayed by the context menu. The item objects must have the fields that are used by the **ContextMenu** [default item template](/Documentation/ApiReference/UI_Widgets/dxContextMenu/Default_Item_Template).

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.rowFields): Array<PivotGridDataSource_Options_fields>
Fields in the "row" area.

##### field(e.rowIndex): Number
The index of the row to which the clicked cell belongs.    
Unavailable for fields in the [field panel](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel).

---
Main article: [onContextMenuPreparing](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#onContextMenuPreparing)

#####See Also#####
#include common-link-handleevents