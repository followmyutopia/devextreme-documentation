---
id: dxTreeListColumn.editCellTemplate
type: template
---
---
##### shortDescription

##### param(cellElement): dxElement
#include common-ref-elementparam with { element: "current cell" }

##### param(cellInfo): Object
The cell's properties.

##### field(cellInfo.column): dxTreeListColumn
The settings of the column the cell belong to.

##### field(cellInfo.columnIndex): Number
The index of the column the cell belongs to.        
Refer to the [Column and Row Indexes](/Documentation/Guide/Widgets/TreeList/Columns/Column_and_Row_Indexes/) topic for more information on how this index is calculated.

##### field(cellInfo.component): dxTreeList
The widget's instance.

##### field(cellInfo.data): Object
The data of the cell's row.

##### field(cellInfo.displayValue): any
The displayed cell value. Differs from the **value** field only when the column uses [lookup]({basewidgetpath}/Configuration/columns/lookup/) or [calculateDisplayValue]({basewidgetpath}/Configuration/columns/#calculateDisplayValue).

##### field(cellInfo.row): dxTreeListRowObject

##### field(cellInfo.rowIndex): Number
The index of the row the cell belongs to. Begins with 0 on each page. Group rows are included.      
Refer to the [Column and Row Indexes](/Documentation/Guide/Widgets/TreeList/Columns/Column_and_Row_Indexes/) topic for more information on row indexes.

##### field(cellInfo.rowType): String
The row's [type]({basewidgetpath}/Row/#rowType).

##### field(cellInfo.setValue(newValue, newText)): any
A method that you should call to change the cell value and, optionally, the displayed value after the editor's value is changed.        
See an example in the [Custom Editors](/Demos/WidgetsGallery/Demo/DataGrid/CustomEditors/jQuery/Light/) demo.

[note] In batch [editing mode]({basewidgetpath}/Configuration/editing/#mode), check that the value is actually changed before calling this method to ensure correct cell highlighting.

##### field(cellInfo.text): String
**displayValue** after applying [format]({basewidgetpath}/Configuration/columns/#format) and [customizeText]({basewidgetpath}/Configuration/columns/#customizeText).

##### field(cellInfo.value): any
The cell value as it is specified in the data source.

##### field(cellInfo.watch): function()

---
