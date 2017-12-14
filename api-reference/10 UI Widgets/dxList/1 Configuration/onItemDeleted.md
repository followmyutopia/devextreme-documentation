<!--EventForAction-->..\4 Events\itemDeleted.md<!--/EventForAction-->
===========================================================================
<!--hidden-->false<!--/hidden-->
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the [itemDeleted](/Documentation/ApiReference/UI_Widgets/dxList/Events/#itemDeleted) event.
<!--/shortDescription-->

<!--fullDescription-->
Assign a function to perform a custom action when a list item is deleted.

Note that the **itemDeleted** event is raised only if an item is deleted using the appropriate method of the widget or end-user interaction. If you delete an item from an observable array passed to the **dataSource** or **items** option, the widget entirely reloads the items array without raising the **itemDeleted** and **itemDeleting** events.

#####See Also#####
- [List - Handle Deletion-Related Events](/Documentation/Guide/Widgets/List/Item_Deletion/#Events)
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
The model data. Available only if Knockout is used.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->itemData<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The removed item's data.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->itemElement<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->dxElement<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The item's container.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->itemIndex<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->Number|Object<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The removed item's index. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.
<!--/typeFunctionParamDescription1_field6-->
