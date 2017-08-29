<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->String | Array | DataSource | DataSource configuration<!--/type-->
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
 A DataSource is an object that provides a handy API for data processing. A DataSource is a stateful object, which means that it saves data processing settings and applies them each time data is loaded. All underlying data access logic of a DataSource is isolated in a Store. A Store provides an API for reading and modifying data. Unlike the DataSource, a Store is a stateless object.

To display appointments, a default template can be used. This template is based on the data source fields that are listed in the [Default Item Template](/Documentation/ApiReference/UI_Widgets/dxScheduler/Default_Appointment_Template/) section of the widget's API. Alternatively, you can implement a [custom template](/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment/). 

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposeschedulerschedulergooglecalendarintegration" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [Scheduler - Data Binding](/Documentation/Guide/Widgets/Scheduler/Data_Binding/)

<!--/fullDescription-->