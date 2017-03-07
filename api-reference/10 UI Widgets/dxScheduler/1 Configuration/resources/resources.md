<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Specifies a scheduler resources<!--/d-->
===========================================================================
<!--default-->[]<!--/default-->
<!--type-->Array<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies an array of resources available in the scheduler.
<!--/shortDescription-->

<!--fullDescription-->
Each element of this array is an object that defines a resource kind - a room, a car or any other resource kind. A resource kind object must have at least the following fields.

- [dataSource](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#dataSource)  
Specify the available resources of this kind (room1, room2, etc.).

- [field](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#field)  
The name of the [appointment data source](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#dataSource) field specifying a resource of this kind (e.g., 'room').

There are more fields that can be specified within a resource kind object. They are listed below. For details on how to define a resource and assign it to scheduler appointments, refer to the [Resources](/Documentation/Guide/UI_Widgets/Scheduler/Resources/) article.


<!--/fullDescription-->