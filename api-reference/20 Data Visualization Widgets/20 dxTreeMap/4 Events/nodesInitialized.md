<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Raised when nodes are created<!--/d-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->EVENT<!--/type-->
<!--fp1d-->Event argument<!--/fp1d-->
<!--fp1_field1d-->Widget itself<!--/fp1_field1d-->
<!--fp1_field2d-->Widget container<!--/fp1_field2d-->
<!--fp1_field3d-->Root node<!--/fp1_field3d-->
===========================================================================

<!--shortDescription-->
Fires when all nodes in the widget are initialized.
<!--/shortDescription-->

<!--fullDescription-->
Implement a handler for this event to perform certain operations on the node structure. It will be called once - at the beginning of the widget's lifetime.

Within the handler, use the object passed to it as the parameter. Among the fields of this object, you can find the root node. Using the [getAllChildren()](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#getAllChildren) and [getChild(index)](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#getChildindex) of this node, you can access any other node in the widget. To learn about other available members of any node including the root node, refer to the description of the [Node](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/) object.

#####See Also#####
- [Handle Events - jQuery](/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_jQuery/#Handle_Events)
- [Handle Events - AngularJS](/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_AngularJS/#Handle_Events)
- [Handle Events - Knockout](/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_Knockout/#Handle_Events)
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->object<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->root<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->dxtreemapnode<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The root node.
<!--/typeFunctionParamDescription1_field3-->
