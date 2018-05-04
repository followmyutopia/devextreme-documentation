===========================================================================
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Fires before displaying a context menu that is invoked on one of the pivot grid's header or row cells.
<!--/shortDescription-->

<!--fullDescription-->
Instead, you can use the [onContextMenuPreparing](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#onContextMenuPreparing) option to handle the event.

Handle this event to change the set of items in a context menu before it is displayed.

#####See Also#####
#include common-link-handleevents
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->DOMComponent<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if Knockout is used.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->items<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Array<Object><!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
An array of items to be displayed by the context menu. The item objects must have the fields that are used by the **ContextMenu** [default item template](/Documentation/ApiReference/UI_Widgets/dxContextMenu/Default_Item_Template).
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->area<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->String<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The clicked [area's](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area) type.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->cell<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->dxPivotGridPivotGridCell<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The cell that has been clicked to invoke the context menu.    
Unavailable for fields in the [field panel](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel).
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->cellElement<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->dxElement<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The clicked cell's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.  
Unavailable for fields in the [field panel](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel).
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->columnIndex<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->Number<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The index of the column to which the clicked cell belongs.    
Unavailable for fields in the [field panel](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel).
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->rowIndex<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->Number<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The index of the row to which the clicked cell belongs.    
Unavailable for fields in the [field panel](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel).
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->dataFields<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->Array<PivotGridDataSource_Options_fields><!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
Fields in the 'data' area.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->rowFields<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->Array<PivotGridDataSource_Options_fields><!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
Fields in the 'row' area.
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->columnFields<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->Array<PivotGridDataSource_Options_fields><!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
Fields in the 'column' area.
<!--/typeFunctionParamDescription1_field12-->
<!--typeFunctionParamName1_field13-->field<!--/typeFunctionParamName1_field13-->
<!--typeFunctionParamType1_field13-->PivotGridDataSource_Options_fields<!--/typeFunctionParamType1_field13-->
<!--typeFunctionParamDescription1_field13-->
This field's [configuration](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/).    
Available for fields in the [field panel](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel) only.
<!--/typeFunctionParamDescription1_field13-->
