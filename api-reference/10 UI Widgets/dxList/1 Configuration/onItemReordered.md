<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->An action performed when an item is reordered. 'itemElement' argument specifies the unselected item element. 'itemData' argument specifies the unselected item data. 'fromIndex' argument specifies the previous item index. 'toIndex' argument specifies the current item index. For grouped list index represents as object with group and item indices e.g. { group: 0, item: 0 }.<!--/d-->
<!--EventForAction-->..\4 Events\itemReordered.md<!--/EventForAction-->
===========================================================================
<!--hidden-->false<!--/hidden-->
<!--default-->null<!--/default-->
<!--type-->function<!--/type-->
<!--fp1d-->Provides function parameters<!--/fp1d-->
<!--fp1_field1d-->Returns the component instance<!--/fp1_field1d-->
<!--fp1_field2d-->Returns an html representing the component<!--/fp1_field2d-->
<!--fp1_field3d-->Returns the data that is available for binding against the element<!--/fp1_field3d-->
<!--fp1_field4d-->Returns an object representing the item<!--/fp1_field4d-->
<!--fp1_field5d-->Returns an HTML element representing the item<!--/fp1_field5d-->
<!--fp1_field6d-->Returns a number representing the item index. For grouped list index represents as object with group and item indices e.g. { group: 0, item: 0 }<!--/fp1_field6d-->
<!--fp1_field7d-->Returns the initial item index. For grouped list index represents as object with group and item indices e.g. { group: 0, item: 0 }.<!--/fp1_field7d-->
<!--fp1_field8d-->Returns the current item index. For grouped list index represents as object with group and item indices e.g. { group: 0, item: 0 }.<!--/fp1_field8d-->
===========================================================================

<!--shortDescription-->
A handler for the [itemReordered](/Documentation/ApiReference/UI_Widgets/dxList/Events/#itemReordered) event.
<!--/shortDescription-->

<!--fullDescription-->
Assign a function to perform a custom action when a list item is moved to another position.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Provides function parameters.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Provides access to the widget instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->jQuery<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
An HTML element of the widget.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->itemData<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The data that is bound to the reordered item.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->itemElement<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->jQuery<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
An HTML element of the item.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->itemIndex<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->number | object<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
Specifies the current index of the item after reordering. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }. This field holds the same value as <b>toIndex</b>.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->fromIndex<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->number<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
Specifies the previous index of the item. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->toIndex<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->number<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
Specifies the current index of the item. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.
<!--/typeFunctionParamDescription1_field8-->
