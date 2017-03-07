<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->An action performed when an item swipe is performed. 'itemElement' argument specifies the swiped item element. 'itemData' argument specifies the swiped item data. 'direction' argument specifies the event direction.<!--/d-->
<!--EventForAction-->..\4 Events\itemSwipe.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function<!--/type-->
<!--fp1d-->Provides function parameters<!--/fp1d-->
<!--fp1_field1d-->Returns the component instance<!--/fp1_field1d-->
<!--fp1_field2d-->Returns an html representing the component<!--/fp1_field2d-->
<!--fp1_field3d-->Returns the data that is available for binding against the element<!--/fp1_field3d-->
<!--fp1_field4d-->Returns a jQuery event that caused the action's execution<!--/fp1_field4d-->
<!--fp1_field5d-->Returns an object representing the item<!--/fp1_field5d-->
<!--fp1_field6d-->Returns an HTML element representing the item<!--/fp1_field6d-->
<!--fp1_field7d-->Returns a number representing the item index. For grouped list index represents as object with group and item indices e.g. { group: 0, item: 0 }<!--/fp1_field7d-->
<!--fp1_field8d-->Returns either a 'left' or 'right' string specifying the direction of the processed swipe operation<!--/fp1_field8d-->
===========================================================================

<!--shortDescription-->
A handler for the [itemSwipe](/Documentation/ApiReference/UI_Widgets/dxList/Events/#itemSwipe) event.
<!--/shortDescription-->

<!--fullDescription-->
Assign a function to perform a custom action when an item is swiped.
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
<!--typeFunctionParamName1_field4-->jQueryEvent<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->jQueryEvent<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
Specifies the jQuery event that caused action execution.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->itemData<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->object<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The data that is bound to the swiped item.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->itemElement<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->jQuery<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
An HTML element of the item.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->itemIndex<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->number | object<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The index of the swiped items. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->direction<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->string<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
Specifies whether the swipe operation is performed in the left or right direction.
<!--/typeFunctionParamDescription1_field8-->
