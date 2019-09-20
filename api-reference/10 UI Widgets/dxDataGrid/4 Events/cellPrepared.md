---
id: dxDataGrid.cellPrepared
type: eventType
---
---
##### shortDescription
Raised after a cell is created.

##### param(e): Object
Information about the event.

##### field(e.cellElement): dxElement
#include common-ref-elementparam with { element: "cell" }

##### field(e.column): dxDataGridColumn
This column's [configuration](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/).

##### field(e.columnIndex): Number
The index of the column to which the cell belongs. For details on indexes, see the [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) topic.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.data): Object
The data of the row to which the cell belongs. Unavailable if **rowType** is *"header"*, *"filter"* or *"totalFooter"*.

##### field(e.displayValue): any
The cell's displayed value. Differs from the **value** field only when the column to which the prepared cell belongs uses [lookup](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/).

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.isExpanded): Boolean
Indicates whether the row is expanded or collapsed. Unavailable if **rowType** is *"header"*, *"filter"* or *"totalFooter"*.

##### field(e.isNewRow): Boolean
<!-- Description goes here -->

##### field(e.isSelected): Boolean
Indicates whether the row is selected.

##### field(e.key): any
The row's key. Unavailable if **rowType** is *"header"*, *"filter"* or *"totalFooter"*.        
If a field providing keys is not specified in the [data source](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource), the whole data object is considered the key.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.oldValue): any
The cell's previous raw value.

##### field(e.row): dxDataGridRowObject
The row [properties](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/).

##### field(e.rowIndex): Number
The row's index. Refer to [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) for more information.

##### field(e.rowType): String
The row's [type](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#rowType).

##### field(e.text): String
The cell's [formatted](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format) value converted to a string.

##### field(e.value): any
The cell's raw value.

##### field(e.watch): function()
Allows tracking a variable and performing actions when it changes. Applies when [repaintChangesOnly](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#repaintChangesOnly) is **true**.       
This function has the following parameters:     

- **getter(data)**: Function        
A function that returns the variable that should be tracked.

- **handler(newValue)**: Function       
A function called when this variable changes.

---
Main article: [onCellPrepared](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onCellPrepared)

#####See Also#####
#include common-link-handleevents