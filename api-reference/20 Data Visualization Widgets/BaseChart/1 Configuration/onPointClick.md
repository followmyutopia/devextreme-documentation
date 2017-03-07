<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\pointClick.md<!--/EventForAction-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->function(e) | string<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the [pointClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#pointClick) event.
<!--/shortDescription-->

<!--fullDescription-->
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the clicked series point. To learn about point's members that you can use, refer to the description of the [Point](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/) object.

[note] A click on a series point causes the [seriesClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#seriesClick) event to fire after the **pointClick** event. To prevent this behavior, assign *true* to the **jQueryEvent.cancel** field of the object passed to the **pointClick** event handler as the argument.

Alternatively, you can navigate to a specific URL when the **pointClick** event fires. For this purpose, assign this URL to the **onPointClick** option.

To learn more about how to handle click operations, and to see an example, refer to the [Click Handling](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_End-User_Interaction/Click_Handling) topic.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsadvancedfeaturesselection/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
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
<!--typeFunctionParamName1_field3-->jQueryEvent<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->jQuery-event object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The jQuery event.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->target<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Point<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The clicked series point.
<!--/typeFunctionParamDescription1_field4-->
