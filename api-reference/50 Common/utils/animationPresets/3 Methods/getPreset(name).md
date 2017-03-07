<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Returns the configuration of the animation found in the animation repository by the specified name for the current device.
<!--/shortDescription-->

<!--paramName1-->name<!--/paramName1-->
<!--paramType1-->string<!--/paramType1-->
<!--paramDescription1-->
The name of the requested animation configuration.
<!--/paramDescription1-->

<!--fullDescription-->
Note that several animation configurations can be registered in the **animationPresets** repository by a single name, because they are targeted for different [devices](/Documentation/ApiReference/Common/Object_Structures/device/). When you call the **getPreset(name)** method, the configuration registered for the current device will be returned.
<!--/fullDescription-->