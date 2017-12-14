<!--EventForAction-->..\4 Events\updated.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the **update** event.
<!--/shortDescription-->

<!--fullDescription-->
Assign a function to perform a custom action after the widget is updated.
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
The widget's container.
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
The event that caused the handler execution. It is a [dxEvent](/Documentation/ApiReference/Common/Object_Structures/dxEvent/) or a [jQuery.Event](http://api.jquery.com/Types/#Event) when you use jQuery.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->scrollOffset<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->Object<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The current scroll offset in the following format: { top: topOffset, left: leftOffset }.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->reachedLeft<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->Boolean<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
Indicates whether the container's left boundary is reached.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->reachedRight<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->Boolean<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
Indicates whether the container's right boundary is reached.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->reachedTop<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->Boolean<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
Indicates whether the container's top boundary is reached.
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->reachedBottom<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->Boolean<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
Indicates whether the container's bottom boundary is reached.
<!--/typeFunctionParamDescription1_field10-->
