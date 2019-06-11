<!--id-->dxScheduler.Options.appointmentTooltipTemplate<!--/id-->
===========================================================================
<!--default-->'appointmentTooltip'<!--/default-->
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom template for appointment tooltips and appointments in the [appointment collector](/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Collector/)'s drop-down list.
<!--/shortDescription-->

<!--fullDescription-->
For appointments in the appointment collector, this option can be ignored in favor of the [dropDownAppointmentTemplate](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#dropDownAppointmentTemplate).

#include common-demobutton-named with {
    name: "Custom Templates",
    url: "/Demos/WidgetsGallery/Demo/Scheduler/CustomTemplates/jQuery/Light/"
}
#include common-demobutton-named with {
    name: "Appointment Collector",
    url: "/Demos/WidgetsGallery/Demo/Scheduler/LimitAppointmentCountPerCell/jQuery/Light/"
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
#include common-ref-elementparam with { element: "appointment" }
<!--/typeFunctionParamDescription2-->

<!--typeFunctionParamName3-->targetedAppointmentData<!--/typeFunctionParamName3-->
<!--typeFunctionParamType3-->Object<!--/typeFunctionParamType3-->
<!--typeFunctionParamDescription3-->
The data of the appointment whose tooltip is rendered.      
Refer to the [onAppointmentClick](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentClick) description for more information on the difference between the **appointmentData** and **targetedAppointmentData** parameters.
<!--/typeFunctionParamDescription3-->

<!--typeFunctionParamName4-->itemIndex<!--/typeFunctionParamName4-->
<!--typeFunctionParamType4-->Number<!--/typeFunctionParamType4-->
<!--typeFunctionParamDescription4-->
The appointment's index.
<!--/typeFunctionParamDescription4-->

<!--typeFunctionReturnType-->String|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or container.
<!--/typeFunctionReturnDescription-->