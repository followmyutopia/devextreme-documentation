<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Selects the specified item from the list.
<!--/shortDescription-->

<!--paramName1-->itemIndex<!--/paramName1-->
<!--paramType1-->Number|Object<!--/paramType1-->
<!--paramDescription1-->
The index number of the list item to select. If the list is grouped, pass an object with the required group and item indexes, e.g., { group: 0, item: 0 }.
<!--/paramDescription1-->

<!--fullDescription-->
Note that the result of the method execution depends on the current value of the [selectionMode](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectionMode) option, which accepts the following values.

- **none**  
 The method does nothing.

- **single**  
 The method selects the specified item while the previously selected item becomes unselected.

- **multi** and **all**
 The method adds the specified item to the list of currently selected items.

#####See Also#####
- [List - Selection API](/Documentation/Guide/Widgets/List/Selection/#API)
<!--/fullDescription-->