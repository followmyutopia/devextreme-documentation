<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->EVENT<!--/type-->
===========================================================================

<!--shortDescription-->
Fires when the user clicks a node.
<!--/shortDescription-->

<!--fullDescription-->
When implementing a handling function, use the object passed to it as the parameter. Among the fields of this object, you can find the clicked node. To learn about node's members that you can use, refer to the description of the [Node](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/) object.

To handle this event, attach a handler to it using the [on(eventName, eventHandler)](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Methods/#oneventName_eventHandler) method. For example, the handler in the following code selects/deselects the clicked node.

    <!--JavaScript-->// ...
    var selectNode = function (e) {
        e.node.select(!e.node.isSelected());
    };
    
    treeMapInstance.on('click', selectNode);
    
#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/)<!--/fullDescription-->
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
<!--typeFunctionParamName1_field3-->jQueryEvent<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->jQuery-event object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The jQuery event.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->node<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->dxtreemapnode<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The clicked node.
<!--/typeFunctionParamDescription1_field4-->
