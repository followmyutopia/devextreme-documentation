<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Axis label click event<!--/d-->
<!--EventForAction-->..\4 Events\argumentAxisClick.md<!--/EventForAction-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->function(e) | string<!--/type-->
<!--fp1d-->Event argument<!--/fp1d-->
<!--fp1_field1d-->Widget itself.<!--/fp1_field1d-->
<!--fp1_field2d-->Widget container.<!--/fp1_field2d-->
<!--fp1_field3d-->An extended jQuery event.<!--/fp1_field3d-->
<!--fp1_field4d-->Axis. The object that provides access to the axis that was clicked.<!--/fp1_field4d-->
<!--fp1_field5d-->The axis argument that was actually clicked.<!--/fp1_field5d-->
===========================================================================

<!--shortDescription-->
A handler for the [argumentAxisClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Events/#argumentAxisClick) event.
<!--/shortDescription-->

<!--fullDescription-->
When implementing a handling function, use the object passed to it as the parameter. You can find the value of the clicked label among fields of this object.

Alternatively, you can navigate to a specific URL when the **argumentAxisClick** event fires. For this purpose, assign this URL to the **onArgumentAxisClick** option.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxPolarChart/Methods/#instance">widget instance</a>.
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
<!--typeFunctionParamType1_field4-->object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The argument axis.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->argument<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->Date|Number|string<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The value of the clicked label.
<!--/typeFunctionParamDescription1_field5-->
