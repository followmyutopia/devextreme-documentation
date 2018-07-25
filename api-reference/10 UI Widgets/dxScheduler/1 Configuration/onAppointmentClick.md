<!--EventForAction-->..\4 Events\appointmentClick.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e) | String<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed when an appointment is clicked or tapped.
<!--/shortDescription-->

<!--fullDescription-->
In case of recurring appointments or appointments with multiple resources, you may want to obtain information about the currently selected appointment, not the initial appointment. For this purpose, use the **targetedAppointmentData** field of the function parameter. Otherwise, use the **appointmentData** field.

For example, there is a recurring appointment that starts on July 18 at 8:00 AM, repeats every day and belongs to two owners:

    <!--JavaScript-->
    var appointments = [
        ...
        {
            startDate: new Date(2016, 6, 18, 8),
            endDate: new Date(2016, 6, 18, 9),
            ownerId: [1, 2],
            recurrenceRule: "FREQ=DAILY"
        }
    ];

If you click an appointment from the recurring series, for example the second appointment belonging to the second owner, the following information is presented in the **appointmentData** and **targetedAppointmentData** fields.

    <!--JavaScript-->
    onAppointmentClick: function(e) {
        /* The initial appointment data
            {
                startDate: new Date(2016, 6, 18, 8), 
                endDate: new Date(2016, 6, 18, 9),
                ownerId: [1, 2],
                recurrenceRule: "FREQ=DAILY"
            }
        */
        var appointmentData = e.appointmentData;
    
        /* The clicked appointment data
            {
                startDate: new Date(2016, 6, 19, 8), 
                endDate: new Date(2016, 6, 19, 9),
                ownerId: 2,
                recurrenceRule: "FREQ=DAILY"
            }
        */
        var targetedAppointmentData = e.targetedAppointmentData;
    }
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
<!--typeFunctionParamName1_field4-->appointmentData<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The initial appointment.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->targetedAppointmentData<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->Object<!--/typeFunctionParamType1_field5-->
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
The event that caused the handler execution. It is a [dxEvent](/Documentation/ApiReference/Common/Object_Structures/dxEvent/) or a [jQuery.Event](http://api.jquery.com/category/events/event-object/) when you use jQuery.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->cancel<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->Boolean<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
Allows you to cancel execution of the default appointment click handler.
<!--/typeFunctionParamDescription1_field9-->
