<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->Form options<!--/type-->
===========================================================================

<!--shortDescription-->
The form configuration object. Used only when the [editing mode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#mode) is *"form"*.
<!--/shortDescription-->

<!--fullDescription-->
Use the [dataField](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#dataField) option to link a form [item](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#items) with the corresponding grid column.

[note]There is a number of **Form** properties that you cannot specify using this option. Those are the following.

- [template](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#template)        
- [editorType](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorType)        
- any [event](/Documentation/ApiReference/UI_Widgets/dxForm/Events/) handler ([options](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#onContentReady) whose name starts with *"on..."*); instead, handle the [editorPreparing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#editorPreparing) or [editorPrepared](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#editorPrepared) event to customize the form editors.
<!--/fullDescription-->