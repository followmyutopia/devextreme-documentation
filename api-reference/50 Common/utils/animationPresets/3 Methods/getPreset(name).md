<!--id-->animationPresets.getPreset(name)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Gets the configuration of an animation with a specific name. 
<!--/shortDescription-->

<!--paramName1-->name<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
The animation's name.
<!--/paramDescription1-->

<!--returnType-->any<!--/returnType-->
<!--returnDescription-->
The animation configuration.
<!--/returnDescription-->

<!--fullDescription-->
Note that several animation configurations can be registered in the **animationPresets** repository by a single name, because they are targeted for different [devices](/Documentation/ApiReference/Common/Object_Structures/device/). When you call the **getPreset(name)** method, the configuration registered for the current device will be returned.
<!--/fullDescription-->