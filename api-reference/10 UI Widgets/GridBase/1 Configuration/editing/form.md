===========================================================================
<!--type-->dxForm_Options<!--/type-->
===========================================================================

<!--shortDescription-->
Configures the form. Used only if **editing**.[mode]({basewidgetpath}/Configuration/editing/#mode) is *"form"* or *"popup"*.
<!--/shortDescription-->

<!--fullDescription-->
Default form editors depend on the [columns' configuration]({basewidgetpath}/Configuration/columns/). If the generated form does not meet your requirements, and you need to reorganize form items or set other [form parameters](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/), specify it in the **form** option. To link a [form item](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#items) with a grid column, assign identical values to the **form**.**items**.[dataField](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#dataField) and **columns**.[dataField]({basewidgetpath}/Configuration/columns/#dataField) options.

[note]
 
There are some form parameters that you cannot specify using this option:

- [template](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#template)        
- [readOnly](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#readOnly)          
- [editorType](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorType)        
- any [event](/Documentation/ApiReference/UI_Widgets/dxForm/Events/) handler ([options](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#onContentReady) whose name starts with *"on..."*); instead, handle the [editorPreparing]({basewidgetpath}/Events/#editorPreparing) or [editorPrepared]({basewidgetpath}/Events/#editorPrepared) event to customize the form editors.

[/note]

#include widgets-config-object-option-note

#####See Also#####
- [Form Guides](/Documentation/Guide/Widgets/Form/Configure_Simple_Items/)
<!--/fullDescription-->