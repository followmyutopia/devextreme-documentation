---
id: GridBase.Options.editing.mode
acceptValues: 'batch' | 'cell' | 'row' | 'form' | 'popup'
type: String
default: 'row'
---
---
##### shortDescription
Specifies how a user edits data.

---
The following list points out the differences in editing modes.

- [**Row**](/Documentation/Guide/Widgets/{WidgetName}/Editing/#User_Interaction/Row_Mode)       
A user edits one row at a time. The widget saves changes when the row leaves the editing state. See [demo](/Demos/WidgetsGallery/Demo/{WidgetName}/RowEditing/jQuery/Light/).
- [**Batch**](/Documentation/Guide/Widgets/{WidgetName}/Editing/#User_Interaction/Batch_Mode)     
A user edits data cell by cell. The widget does not save changes until a user clicks the global *"Save"* button. See [demo](/Demos/WidgetsGallery/Demo/{WidgetName}/BatchEditing/jQuery/Light/).
- [**Cell**](/Documentation/Guide/Widgets/{WidgetName}/Editing/#User_Interaction/Cell_Mode)      
Differs from the batch mode in that the widget saves changes when the cell leaves the editing state. See [demo](/Demos/WidgetsGallery/Demo/{WidgetName}/CellEditing/jQuery/Light/).
- [**Form**](/Documentation/Guide/Widgets/{WidgetName}/Editing/#User_Interaction/Form_Mode)      
On entering the editing state, a row becomes a form with editable fields. The widget saves changes after a user clicks the *"Save"* button. See [demo](/Demos/WidgetsGallery/Demo/{WidgetName}/FormEditing/jQuery/Light/).
- [**Popup**](/Documentation/Guide/Widgets/{WidgetName}/Editing/#User_Interaction/Popup_Mode)     
Differs from the form mode in that the form with editable fields is placed in a popup window. See [demo](/Demos/WidgetsGallery/Demo/{WidgetName}/PopupEditing/jQuery/Light/).

#include common-ref-enum with {
    enum: "`GridEditMode`",
    values: "`Row`, `Batch`, `Cell`, `Form`, and `Popup`"
}