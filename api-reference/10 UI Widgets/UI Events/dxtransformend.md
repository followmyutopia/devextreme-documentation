<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->The event for handling when transform gesture is finished.<!--/d-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_events_transform">events/transform</a><!--/module-->
<!--type-->EVENT<!--/type-->
<!--fp1d-->A jQuery event object.<!--/fp1d-->
<!--fp1_field1d-->Indicates a scale transformation relative to the gesture start.<!--/fp1_field1d-->
<!--fp1_field2d-->Indicates a scale transformation relative to the last gesture update.<!--/fp1_field2d-->
<!--fp1_field3d-->Indicates a rotation transformation relative to the gesture start.<!--/fp1_field3d-->
<!--fp1_field4d-->Indicates a rotation transformation relative to the last gesture update.<!--/fp1_field4d-->
<!--fp1_field5d-->Indicates a translation transformation relative to the gesture start.<!--/fp1_field5d-->
<!--fp1_field6d-->Indicates a translation transformation relative to the last gesture update.<!--/fp1_field6d-->
<!--fp1_field7d-->Used to prevent the gesture. Must be assigned to 'true' value to cancel gesture.<!--/fp1_field7d-->
===========================================================================

<!--shortDescription-->
Raised when the transform gesture has been completed.
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
<!--typeFunctionParamName1_field3-->rotation<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->number<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Indicates the rotation angle against the initial position.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->deltaRotation<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->number<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
Indicates the rotation angle against the last gesture update.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->translation<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->object<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
Indicates the translation distance against the initial position.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->deltaTranslation<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->object<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
Indicates the translation distance against the last gesture update.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->cancel<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->boolean<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
Specifies whether or not to cancel gesture processing.
<!--/typeFunctionParamDescription1_field7-->
