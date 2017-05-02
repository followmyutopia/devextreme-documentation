<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'row'<!--/default-->
<!--acceptValues-->'row' | 'batch' | 'cell' | 'form' | 'popup'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how a user edits data.
<!--/shortDescription-->

<!--fullDescription-->
The following list points out the differences in editing modes.

- **Row**       
A user edits one row at a time. The widget saves changes when the row leaves the editing state. See [Row Mode](/Documentation/Guide/Widgets/DataGrid/Data_Editing/#Editing_in_UI/Row_Mode).
- **Batch**     
A user edits data cell by cell. The widget does not save changes until a user clicks the global *"Save"* button. See [Batch Mode](/Documentation/Guide/Widgets/DataGrid/Data_Editing/#Editing_in_UI/Batch_Mode).
- **Cell**      
Differs from the batch mode in that the widget saves changes when the cell leaves the editing state. See [Cell Mode](/Documentation/Guide/Widgets/DataGrid/Data_Editing/#Editing_in_UI/Cell_Mode).
- **Form**      
On entering the editing state, a row becomes a form with editable fields. The widget saves changes after a user clicks the *"Save"* button. See [Form Mode](/Documentation/Guide/Widgets/DataGrid/Data_Editing/#Editing_in_UI/Form_Mode).
- **Popup**     
Differs from the form mode in that the form with editable fields is placed in a popup window. See [Popup Mode](/Documentation/Guide/Widgets/DataGrid/Data_Editing/#Editing_in_UI/Popup_Mode).

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `GridEditMode` enum. This enum accepts the following values: `Row`, `Batch`, `Cell`, `Form` and `Popup`.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/RowEditingAndEditingEvents/jQuery/Light/" class="button orange small fix-width-155" style="margin-right:5px; width:100px" target="_blank">Row Editing Demo</a>
<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/BatchEditing/jQuery/Light/" class="button orange small fix-width-155" style="margin-right:5px; width:100px" target="_blank">Batch Editing Demo</a>
<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/CellEditingAndEditingAPI/jQuery/Light/" class="button orange small fix-width-155" style="margin-right:5px; width:100px" target="_blank">Cell Editing Demo</a>
<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/FormEditing/jQuery/Light/" class="button orange small fix-width-155" style="margin-right:5px; width:100px" target="_blank">Form Editing Demo</a>
<!--/fullDescription-->