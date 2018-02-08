===========================================================================
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Fires after an appointment has been clicked.
<!--/shortDescription-->

<!--fullDescription-->
Instead, you can use the [onAppointmentClick](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentClick) option to handle the event.

In case of recurring appointments or appointments with multiple resources, you may want to obtain information about the currently selected appointment, not the initial appointment. For this purpose, use the **targetedAppointmentData** field of the function parameter. Otherwise, use the **appointmentData** field.

#####See Also#####
#include common-link-handleevents
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
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
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if Knockout is used.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->appointmentData<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The initial appointment.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->targetedAppointmentData<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->object<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The clicked appointment.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->appointmentElement<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->dxElement<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The clicked appointment's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
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
The event that caused the handler execution. It is a [dxEvent](/Documentation/ApiReference/Common/Object_Structures/dxEvent/) or a [jQuery.Event](http://api.jquery.com/Types/#Event) when you use jQuery.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->cancel<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->Boolean<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
Allows you to cancel execution of the default appointment click handler.
<!--/typeFunctionParamDescription1_field9-->
