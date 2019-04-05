===========================================================================
<!--default-->'dropDownAppointment'<!--/default-->
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom template for appointments in the appointment collector's drop-down list.
<!--/shortDescription-->

<!--fullDescription-->

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Scheduler/LimitAppointmentCountPerCell/jQuery/Light/"
}

#####See Also#####
- [Appointment Collector](/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Collector/)
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
- **views**.[dropDownAppointmentTemplate](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/#dropDownAppointmentTemplate)
<!--/fullDescription-->
<!--typeFunctionParamName1-->itemData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The current appointment's object.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->itemIndex<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->Number<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The current appointment's index.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionParamName3-->itemElement<!--/typeFunctionParamName3-->
<!--typeFunctionParamType3-->dxElement<!--/typeFunctionParamType3-->
<!--typeFunctionParamDescription3-->
The current appointment's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription3-->

<!--typeFunctionReturnType-->String|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or container.
<!--/typeFunctionReturnDescription-->