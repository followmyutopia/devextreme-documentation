<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Function is called on row collapsing<!--/d-->
===========================================================================
<!--type-->EVENT<!--/type-->
<!--fp1d-->Information on collapsing row.<!--/fp1d-->
<!--fp1_field1d-->Returns the component instance<!--/fp1_field1d-->
<!--fp1_field2d-->Returns an html representing the component<!--/fp1_field2d-->
<!--fp1_field3d-->Returns the data that is available for binding against the element<!--/fp1_field3d-->
<!--fp1_field4d-->Key of the row<!--/fp1_field4d-->
<!--fp1_field5d-->The cancel collapsing row.<!--/fp1_field5d-->
===========================================================================

<!--shortDescription-->
Fires before a master or group row is collapsed in the grid.
<!--/shortDescription-->

<!--fullDescription-->
Instead, you can use the [onRowCollapsing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowCollapsing) option to handle the event.

Handle this event to prevent collapsing of a specific row.

#####See Also#####
- [Handle Events - jQuery](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events)
- [Handle Events - AngularJS](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events)
- [Handle Events - Knockout](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events)
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->jQuery<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Data that is available for binding against the element. Available only in the Knockout approach.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->key<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->any<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The key of the group or master row.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->cancel<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->boolean<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
Indicates whether to cancel collapsing the row.
<!--/typeFunctionParamDescription1_field5-->
