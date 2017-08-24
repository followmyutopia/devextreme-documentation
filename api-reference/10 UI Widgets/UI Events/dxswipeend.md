<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--module-->events/swipe<!--/module-->
<!--type-->event<!--/type-->
===========================================================================

<!--shortDescription-->
Raised when the swipe gesture is finished.
<!--/shortDescription-->

<!--fullDescription-->
The event supports the **direction** option, which specifies whether the event is raised for horizontal or vertical scrolling. The option can take on the "vertical" and "horizontal" values. The default option value is "horizontal".
<!--/fullDescription-->
<!--typeFunctionParamName1-->event<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->jQuery.event<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The standard jQuery event argument. The following fields are added to existing fields of this argument object. For the information on event handler arguments, refer to the [UI Events introduction](/Documentation/ApiReference/UI_Widgets/UI_Events/).
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->offset<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->number<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Indicates which distance has been passed during the swipe gesture, measured as a ratio to the target element's width.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->targetOffset<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->number<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
Indicates which distance will be passed to completely finish the motion, measured as a ratio to the target element's width.
<!--/typeFunctionParamDescription1_field2-->
