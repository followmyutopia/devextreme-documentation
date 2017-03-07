<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->The event for handling when pinch gesture is performed.<!--/d-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_events_transform">events/transform</a><!--/module-->
<!--type-->EVENT<!--/type-->
<!--fp1d-->A jQuery event object.<!--/fp1d-->
<!--fp1_field1d-->Indicates a scale transformation relative to the gesture start.<!--/fp1_field1d-->
<!--fp1_field2d-->Indicates a scale transformation relative to the last gesture update.<!--/fp1_field2d-->
<!--fp1_field3d-->Used to prevent the gesture. Must be assigned to 'true' value to cancel gesture.<!--/fp1_field3d-->
===========================================================================

<!--shortDescription-->
Raised when the pinch gesture has been performed.
<!--/shortDescription-->

<!--fullDescription-->

<!--/fullDescription-->
<!--typeFunctionParamName1-->event<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->jQuery.event<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The standard jQuery event argument. The following fields are added to existing fields of this argument object. For the information on event handler arguments, refer to the <a href="#introduction">UI Events introduction</a>.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->scale<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->number<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Indicates a scale transformation against the initial scale.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->deltaScale<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->number<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
Indicates a scale transformation against the last gesture update.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->cancel<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->boolean<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Specifies whether or not to cancel gesture processing.
<!--/typeFunctionParamDescription1_field3-->
