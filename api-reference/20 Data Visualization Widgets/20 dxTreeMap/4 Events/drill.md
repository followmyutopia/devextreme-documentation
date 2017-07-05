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
Fires when the user drills up or down.
<!--/shortDescription-->

<!--fullDescription-->
When implementing a handling function, use the object passed to it as the parameter. Among the fields of this object, you can find the currently displayed node. To learn about node's members that you can use, refer to the description of the [Node](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/) object.

The **drill** event can be used to enable/disable other widgets bound to **TreeMap**. For example, consider that you have a [Button](/Documentation/ApiReference/UI_Widgets/dxButton/). A click on it drills the **TreeMap** widget one level up from the current node. But when the root node becomes the current, there is nowhere to drill up. In that case, disable the button in the handler of the **drill** event.

    <!--JavaScript-->// ...
    var disableBackButton = function (e) {
        if (!e.node.getParent()) // checks whether the node has a parent; if it doesn't, it is the root node
            buttonInstance.option('disabled', true);
        else
            buttonInstance.option('disabled', false);
    };
    
    treeMapInstance.on('drill', disableBackButton);

Although not provided out-of-the-box, the drill down capability is easy to implement using the API methods. Learn how to do this from the [drillDown()](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#drillDown) method description.

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/)
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->object<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->node<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->dxtreemapnode<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The current node.
<!--/typeFunctionParamDescription1_field3-->
