<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\itemSwipe.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the [itemSwipe](/Documentation/ApiReference/UI_Widgets/dxList/Events/#itemSwipe) event.
<!--/shortDescription-->

<!--fullDescription-->
Assign a function to perform a custom action when an item is swiped.

#####See Also#####
- [List - Touch-Screen Gestures](/Documentation/Guide/Widgets/List/End-User_Interaction/Touch-Screen_Gestures/)
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Provides function parameters.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->DOMComponent<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Provides access to the widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.
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
The event that caused the handler execution. It is a [dxEvent](/Documentation/ApiReference/Common/Object_Structures/dxEvent/) or a [jQuery.Event](http://api.jquery.com/Types/#Event) when you use jQuery. 
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->itemData<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->object<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The data that is bound to the swiped item.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->itemElement<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->dxElement<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The item's container.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->itemIndex<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->number | object<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The index of the swiped items. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->direction<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->string<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
Specifies whether the swipe operation is performed in the left or right direction.
<!--/typeFunctionParamDescription1_field9-->
