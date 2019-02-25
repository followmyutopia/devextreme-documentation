===========================================================================
<!--default-->'appointmentTooltip'<!--/default-->
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom template for appointment tooltips.
<!--/shortDescription-->

<!--fullDescription-->

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Scheduler/CustomTemplates/jQuery/Light/"
}

#####See Also#####
- [Customize Appointment Tooltip](/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment_Tooltip/)
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
<!--/fullDescription-->
<!--typeFunctionParamName1-->appointmentData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The initial appointment's data.             
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->contentElement<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->dxElement<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The appointment's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionParamName3-->targetedAppointmentData<!--/typeFunctionParamName3-->
<!--typeFunctionParamType3-->Object<!--/typeFunctionParamType3-->
<!--typeFunctionParamDescription3-->
The data of the appointment whose tooltip is rendered.      
Refer to the [onAppointmentClick](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentClick) description for more information on the difference between the **appointmentData** and **targetedAppointmentData** parameters.
<!--/typeFunctionParamDescription3-->

<!--typeFunctionReturnType-->String|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or container.
<!--/typeFunctionReturnDescription-->