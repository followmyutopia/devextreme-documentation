===========================================================================
<!--default-->null<!--/default-->
<!--type-->String | Array<dxSchedulerAppointmentTemplate> | DataSource | DataSource_Options<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the origin of data for the widget.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts one of the following.

- Array of objects      
 A simple JavaScript array containing a collection of plain objects.

- URL       
 A URL to JSON data or to a service returning data in JSON format.

- [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) or its [configuration object](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/)      
 The **DataSource** is an object that provides an API for data processing. The **DataSource**'s underlying data access logic is isolated in a store. Refer to the [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/) and [DataSource Examples](/Documentation/Guide/Data_Layer/Data_Source_Examples/) guides for more information about the **DataSource**. 

    [note] Turn the **DataSource**'s [pagination](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) off to prevent data from partitioning.

#include widgets-ref-datasource-fieldname-note

To display appointments, a default template can be used. This template is based on the data source fields that are listed in the [Default Item Template](/Documentation/ApiReference/UI_Widgets/dxScheduler/Default_Appointment_Template/) section of the widget's API. Alternatively, you can implement a [custom template](/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment/). 

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/formsandmulti-purposeschedulerschedulergooglecalendarintegration"
}

#####See Also#####
- [Scheduler - Data Binding](/Documentation/Guide/Widgets/Scheduler/Data_Binding/)

<!--/fullDescription-->