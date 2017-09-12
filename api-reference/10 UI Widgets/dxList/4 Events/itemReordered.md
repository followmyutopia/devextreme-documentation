<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--hidden-->false<!--/hidden-->
<!--type-->event<!--/type-->
===========================================================================

<!--shortDescription-->
Fires when a list item is moved to another position.
<!--/shortDescription-->

<!--fullDescription-->
Instead, you can use the [onItemReordered](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onItemReordered) option to handle the event.

To enable item reordering, set the [allowItemReordering](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#allowItemReordering) option to **true**.

[note]If a user drags an item and drops it at the same location, the event does not fire.

#####See Also#####
- [List - Handle Reordering-Related Events](/Documentation/Guide/Widgets/List/Item_Reordering/#Events)
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Handling_Events_and_Defining_Callbacks)
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Provides function parameters.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Provides access to the widget's instance.
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
Specifies the current index of the item after reordering. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }. This field holds the same value as **toIndex**.
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
