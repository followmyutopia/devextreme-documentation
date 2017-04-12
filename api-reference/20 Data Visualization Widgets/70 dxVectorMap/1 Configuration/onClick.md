<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\click.md<!--/EventForAction-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->function | string<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the [click](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Events/#click) event.
<!--/shortDescription-->

<!--fullDescription-->
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the object that represents the jQuery event extended by the following fields.

* **x**		
Contains the X coordinate of the clicked point.
* **y**		
Contains the Y coordinate of the clicked point.

[note] The coordinates are calculated relatively to the client area, i.e., the widget's container. To convert them into map coordinates, use the [convertCoordinates(x,y)](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#convertCoordinatesx_y) method.

Alternatively, you can navigate to a specific URL when the **click** event fires. For this purpose, assign this URL to the **onClick** option.

<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The <a href="/Documentation/17_1/ApiReference/Data_Visualization_Widgets/dxVectorMap/Methods/#instance">widget instance</a>.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->object<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->jQueryEvent<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->jQuery-event object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The jQuery event extended by the <b>x</b> and <b>y</b> fields.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->target<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->MapLayerElement object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The clicked layer element (if available).
<!--/typeFunctionParamDescription1_field4-->
