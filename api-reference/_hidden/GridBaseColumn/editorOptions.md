---
id: GridBaseColumn.editorOptions
type: Object
---
---
##### shortDescription
Specifies options for the underlain editor.

---
Depending on the [dataType]({basewidgetpath}/Configuration/columns/#dataType), the column offers a user different widgets for editing and filtering (using the [filter row](/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Filter_Row)): [TextBox](/Documentation/ApiReference/UI_Widgets/dxTextBox/), [DateBox](/Documentation/ApiReference/UI_Widgets/dxDateBox/), [Lookup](/Documentation/ApiReference/UI_Widgets/dxLookup/), etc. In the **editorOptions** object, you can specify options for the widget.

[note]

Do not specify the **onValueChanged** option in this object. If you need to add custom logic to the standard value change handler, override it in the [onEditorPreparing]({basewidgetpath}/Configuration/#onEditorPreparing) function. Refer to the function's description for an example.

[/note]