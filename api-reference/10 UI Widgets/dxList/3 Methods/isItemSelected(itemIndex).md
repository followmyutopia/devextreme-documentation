<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Determine if item is selected.
<!--/d-->
<!--p1d-->The item index. For grouped list index represents as object with group and item indices e.g. { group: 0, item: 0 }.<!--/p1d-->
<!--rd-->A Boolean value specifying whether item is selected.<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Returns a Boolean value that indicates whether or not the specified item is selected.
<!--/shortDescription-->

<!--paramName1-->itemIndex<!--/paramName1-->
<!--paramType1-->Number|Object<!--/paramType1-->
<!--paramDescription1-->
The index number of the requested list item. If the list is grouped, pass an object with the required group and item indexes, e.g., { group: 0, item: 0 }.
<!--/paramDescription1-->

<!--returnType-->boolean<!--/returnType-->
<!--returnDescription-->
A Boolean value specifying whether or not the requested item is selected.
<!--/returnDescription-->

<!--fullDescription-->
To determine which items are currently selected, use the widget's [option](/Documentation/ApiReference/UI_Widgets/dxList/Methods/#optionoptionName) method, passing the [selectedItems](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectedItems) as a parameter.
<!--/fullDescription-->