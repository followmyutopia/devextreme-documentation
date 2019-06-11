<!--id-->DevicesObject.current()<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Gets [information](/Documentation/ApiReference/Common/Object_Structures/device/) on the current device.
<!--/shortDescription-->

<!--returnType-->Device<!--/returnType-->
<!--returnDescription-->
Information on the current device.
<!--/returnDescription-->

<!--fullDescription-->
The device information provided by this function may differ from the actual device on which the application is running if an emulated device is specified for the application 
(see [DevExpress.devices.current(deviceName)](/Documentation/ApiReference/Common/Utils/#devicescurrentdeviceName)). The actual information about the device is available via the [DevExpress.devices.real()](/Documentation/ApiReference/Common/Utils/#devicesreal) function.
<!--/fullDescription-->