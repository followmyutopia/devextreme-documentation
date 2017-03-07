<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Sets emulation device information.
<!--/d-->
<!--p1d-->A device name or config to set. The following device name values are accepted: 'genericPhone', 'iPhone', 'iPhone5', 'iPhone6', 'iPhone6plus', 'iPad', 'iPadMini', 'androidPhone', 'androidTablet', 'win8', 'win8Phone', 'msSurface', 'desktop', 'win10Phone', 'win10'. Using config possible to override any fields of defaultDevice: { deviceType: '', platform: '', version: [], phone: false, tablet: false, android: false, ios: false, win: false, generic: false }<!--/p1d-->
===================================================================
===================================================================

<!--shortDescription-->
Overrides actual device information to force the application to operate as if it was running on a specified device.
<!--/shortDescription-->

<!--paramName1-->deviceName<!--/paramName1-->
<!--paramType1-->string|Device<!--/paramType1-->
<!--paramDescription1-->
The required device name or an object specifying platform information.
<!--/paramDescription1-->

<!--fullDescription-->
The string values accepted by the input parameter are: *"iPhone", "iPhone5", "iPhone6", "iPhone6plus", "iPad", "iPadMini", "androidPhone", "androidTablet", "genericPhone", "msSurface"* and *"desktop"*. The method can also take on an [object](/Documentation/ApiReference/Common/Object_Structures/device/) containing more detailed information on the current platform.

[note]The following values were deprecated: *"win10"* and *"win10Phone"*. In new applications, use the string values listed above.
<!--/fullDescription-->