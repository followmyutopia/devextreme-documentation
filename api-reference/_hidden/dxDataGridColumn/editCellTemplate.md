---
id: dxDataGridColumn.editCellTemplate
type: template
---
---
##### shortDescription
Specifies a custom template for data cells in editing state.

##### param(cellElement): dxElement
#include common-ref-elementparam with { element: "current cell" }

##### param(cellInfo): Object
The cell's properties.

##### field(cellInfo.setValue(newValue, newText)): any
A method you should call to change the cell value and, optionally, the displayed value after the editor's value is changed.        
See an example in the [Custom Editors](/Demos/WidgetsGallery/Demo/DataGrid/CustomEditors/jQuery/Light/) demo.

[note] In batch [editing mode]({basewidgetpath}/Configuration/editing/#mode), check that the value is actually changed before calling this method to ensure correct cell highlighting.

##### field(cellInfo.data): Object
The data of the cell's row.

##### field(cellInfo.component): dxDataGrid
The widget's instance.

##### field(cellInfo.value): any
The cell value as it is specified in the data source.

##### field(cellInfo.displayValue): any
The displayed cell value. Differs from the **value** field only when the column uses [lookup]({basewidgetpath}/Configuration/columns/lookup/) or [calculateDisplayValue]({basewidgetpath}/Configuration/columns/#calculateDisplayValue).

##### field(cellInfo.text): String
**displayValue** after applying [format]({basewidgetpath}/Configuration/columns/#format) and [customizeText]({basewidgetpath}/Configuration/columns/#customizeText).

##### field(cellInfo.columnIndex): Number
The index of the column the cell belongs to.        
Refer to the [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) topic for more information on how this index is calculated.

##### field(cellInfo.rowIndex): Number
The index of the row the cell belongs to. Begins with 0 on each page. Group rows are included.      
Refer to the [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) topic for more information on row indexes.

##### field(cellInfo.column): dxDataGridColumn
The settings of the column the cell belongs to.

##### field(cellInfo.row): dxDataGridRowObject

##### field(cellInfo.rowType): String
The row's [type]({basewidgetpath}/Row/#rowType).

##### field(cellInfo.watch): function()

---
Use the **editCellTemplate** to replace the default editor. In the template, specify the replacement editor's appearance and behavior.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/DataGrid/CustomEditors/jQuery/Light/"
}

Other options that allow editor customization include:

- **columns[]**.[editorOptions](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#editorOptions)         
Use it to specify the default editor's options (except **onValueChanged**).

- [onEditorPreparing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onEditorPreparing)         
Use it to:
    - Change the editor type.
    - Override the default editor's **onValueChanged** handler.
    - [Dynamically change editor options in the editing state](/Documentation/Guide/Widgets/DataGrid/How_To/Dynamically_Change_Editor_Options_in_the_Editing_State/).
    - Implement other customization cases.

[note] If you implement two-way data binding in your template, set [twoWayBindingEnabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#twoWayBindingEnabled) to **false** to switch off the built-in implementation of this feature.

#####See Also#####
- **columns[]**.[showEditorAlways](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#showEditorAlways)
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)