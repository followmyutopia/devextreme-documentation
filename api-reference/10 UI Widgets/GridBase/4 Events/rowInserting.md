<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->EVENT<!--/type-->
===========================================================================

<!--shortDescription-->
Fires before a grid row is transmitted to the data source.
<!--/shortDescription-->

<!--fullDescription-->
Instead, you can use the [onRowInserting]({basewidgetpath}/Configuration/#onRowInserting) option to handle the event.

When implementing a handling function for this event, use the object passed to this function as its argument. This object contains information about the event. Among the fields of this object, you can find the **cancel** flag that allows you to prevent the row from being transmitted to the data source. In order to accomplish that, set this flag to *true*. The behavior of rejected rows depends on the [edit mode]({basewidgetpath}/Configuration/editing/#mode). In [row mode](/Documentation/Guide/Widgets/DataGrid/Data_Editing/#Editing_in_UI/Row_Mode), a rejected row does not switch back to the normal state. In [batch mode](/Documentation/Guide/Widgets/DataGrid/Data_Editing/#Editing_in_UI/Batch_Mode), rejected rows stay buffered. If you need to perform an asynchronous action before saving the newly added row, assign a **jQuery.Promise** object to the **cancel** field. The row will be inserted when the **jQuery.Promise** object is resolved.

[note] In batch edit mode, when several rows are to be inserted, the **rowInserting** event will fire for each row individually.

#####See Also#####
- [Handle Events - jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/)
- [Handle Events - AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/)
- [Handle Events - Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/)
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.
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
<!--typeFunctionParamName1_field4-->data<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
Row data.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->cancel<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->boolean|Promise<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
A flag allowing you to prevent the row from being inserted into the data source.
<!--/typeFunctionParamDescription1_field5-->
