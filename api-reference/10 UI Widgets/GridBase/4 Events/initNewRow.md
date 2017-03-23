<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->EVENT<!--/type-->
===========================================================================

<!--shortDescription-->
Fires on row insertion.
<!--/shortDescription-->

<!--fullDescription-->
Instead, you can use the [onInitNewRow]({basewidgetpath}/Configuration/#onInitNewRow) option to handle the event.

By default, a row inserted into a grid contains no data. If you need this row to contain some data, e.g., default values of row cells, implement a function handling the **initNewRow** event. Use the **data** field of the object passed to this function as the argument to access the data object of the new row. Initially, this data object is empty. Populate this object with data in such a manner that its fields correspond to the fields of a [data source]({basewidgetpath}/Configuration/#dataSource) object.

[note]Populating all fields of the data object is not necessary. Populate only those of them that must initialize specific cells of a new row.

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
Data of the inserted row; initially empty.
<!--/typeFunctionParamDescription1_field4-->
