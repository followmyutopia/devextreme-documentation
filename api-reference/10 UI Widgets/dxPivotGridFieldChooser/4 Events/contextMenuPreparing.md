===========================================================================
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Raised before the context menu is rendered.
<!--/shortDescription-->

<!--fullDescription-->
Main article: [onContextMenuPreparing](/Documentation/ApiReference/UI_Widgets/dxPivotGridFieldChooser/Configuration/#onContextMenuPreparing)

#####See Also#####
#include common-link-handleevents
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->{WidgetName}<!--/typeFunctionParamType1_field1-->
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
Items to be displayed in the context menu. Their structure is described in the [Default Item Template](/Documentation/ApiReference/UI_Widgets/dxContextMenu/Default_Item_Template/) section.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->area<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->String<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The clicked [area's](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area) type.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->field<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->PivotGridDataSource_Options_fields<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The [configuration](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) of the field on which the context menu is invoked.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->jQueryEvent<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->jQuery.Event<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamDeprecated1_field7-->Use 'event' instead.<!--/typeFunctionParamDeprecated1_field7-->
<!--typeFunctionParamName1_field8-->event<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->event<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The event that caused the handler execution. It is a [dxEvent](/Documentation/ApiReference/Common/Object_Structures/dxEvent/) or a [jQuery.Event](http://api.jquery.com/category/events/event-object/) when you use jQuery.
<!--/typeFunctionParamDescription1_field8-->
