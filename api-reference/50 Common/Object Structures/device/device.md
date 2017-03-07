<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--module--><a href="/Documentation/16_2/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_core_devices">core/devices</a><!--/module-->
<!--export-->default<!--/export-->
<!--type-->object<!--/type-->
===========================================================================

<!--shortDescription-->
The **device** object defines the device on which the application is running.
<!--/shortDescription-->

<!--fullDescription-->
This object is returned by the [DevExpress.devices.current()](/Documentation/ApiReference/Common/Utils/devices/Methods/#current) and [DevExpress.devices.real()](/Documentation/ApiReference/Common/Utils/devices/Methods/#real) methods to provide information on the device on which the application is currently running. Use the fields of this object to get the required information on the device. 

You can emulate as if the application runs on another device. For this purpose, use the [DevExpress.devices.current()](/Documentation/ApiReference/Common/Utils/devices/Methods/#currentdeviceName) function passing the required **device** object as a parameter.

The information on the device on which the application is currently running is used to provide an appropriate look and feel for the application. In particular, the styles that are most appropriate for the current device will be applied.
<!--/fullDescription-->