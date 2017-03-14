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
Default form editors depend on the [columns' configuration](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/). If the generated form does not meet your requirements, and you need to reorganize form items or set other [form parameters](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/), specify the **form** option. To link a [form item](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#items) with a grid column, assign identical values to the **form** | **items** | [dataField](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#dataField) and **columns** | [dataField](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataField) options.

[note]
 
There is a number of form parameters that you cannot specify using this option. They are the following.

- [template](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#template)        
- [editorType](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorType)        
- any [event](/Documentation/ApiReference/UI_Widgets/dxForm/Events/) handler ([options](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#onContentReady) whose name starts with *"on..."*); instead, handle the [editorPreparing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#editorPreparing) or [editorPrepared](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#editorPrepared) event to customize the form editors.

[/note]

#####See Also#####
- [Form Guides](/Documentation/Guide/Widgets/Form/Configure_Simple_Items/)
<!--/fullDescription-->
