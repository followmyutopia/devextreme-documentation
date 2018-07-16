===========================================================================
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Raised when a list item is swiped.
<!--/shortDescription-->

<!--fullDescription-->
Main article: [onItemSwipe](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onItemSwipe)

#####See Also#####
- [List - Touch-Screen Gestures](/Documentation/Guide/Widgets/List/End-User_Interaction/Touch-Screen_Gestures/)
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
<!--typeFunctionParamName1_field4-->jQueryEvent<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->jQuery.Event<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamDeprecated1_field4-->Use 'event' instead.<!--/typeFunctionParamDeprecated1_field4-->
<!--typeFunctionParamName1_field5-->event<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->event<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The event that caused the handler execution. It is a [dxEvent](/Documentation/ApiReference/Common/Object_Structures/dxEvent/) or a [jQuery.Event](http://api.jquery.com/category/events/event-object/) when you use jQuery. 
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->itemData<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->Object<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The swiped item's data.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->itemElement<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->dxElement<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The item's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->itemIndex<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->Number|Object<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The item's index. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->direction<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->String<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The direction in which the item is swiped. 
<!--/typeFunctionParamDescription1_field9-->
