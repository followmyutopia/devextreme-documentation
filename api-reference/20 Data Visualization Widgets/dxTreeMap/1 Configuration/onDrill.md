<!--EventForAction-->..\4 Events\drill.md<!--/EventForAction-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the **drill** event.
<!--/shortDescription-->

<!--fullDescription-->
When implementing a handling function, use the object passed to it as the parameter. Among the fields of this object, you can find the currently displayed node. To learn about node's members that you can use, refer to the description of the [Node](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/) object.

The **onDrill** event handler can be used to enable/disable other widgets bound to **TreeMap**. For example, consider that you have a [Button](/Documentation/ApiReference/UI_Widgets/dxButton/). A click on it drills the **TreeMap** widget one level up from the current node. But when the root node becomes the current, there is nowhere to drill up. In that case, disable the button in the **onDrill** event handler.

    <!--JavaScript-->var treeMapOptions = {
        // ...
        onDrill: function (e) {
            if (!e.node.getParent()) // checks whether the node has a parent; if it doesn't, it is the root node
                buttonInstance.option('disabled', true);
            else
                buttonInstance.option('disabled', false);
        };
    };

Although not provided out-of-the-box, the drill down capability is easy to implement using the API methods. Learn how to do this from the [drillDown()](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#drillDown) method description.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/DrillDown/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<a href="https://www.youtube.com/watch?v=pCfBYtOcXxw&index=6&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->DOMComponent<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->node<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->dxTreeMapNode<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The [Node](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/) object.
<!--/typeFunctionParamDescription1_field4-->
