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
A user edits one row at a time. The widget saves changes when the row leaves the editing state.
- **Batch**     
A user edits data cell by cell. The widget does not save changes until a user clicks the global *"Save"* button.
- **Cell**      
Differs from the batch mode in that the widget saves changes when the cell leaves the editing state.
- **Form**      
On entering the editing state, a row becomes a form with editable fields. The widget saves changes after a user clicks a *"Save"* button.
- **Popup**     
Differs from the form mode in that the form with editable fields is placed in a popup window.

When configuring the widget using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), specify this option using the `GridEditMode` enum. This enum accepts the following values: `Row`, `Batch`, `Cell`, `Form` and `Popup`.
<!--/fullDescription-->

<!--handmade-->
<!--/handmade-->
