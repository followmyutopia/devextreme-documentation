<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Moves the specified item to the specified position in the list.
<!--/shortDescription-->

<!--paramName1-->itemElement<!--/paramName1-->
<!--paramType1-->Node<!--/paramType1-->
<!--paramDescription1-->
The DOM node of the item to be moved.
<!--/paramDescription1-->

<!--paramName2-->toItemElement<!--/paramName2-->
<!--paramType2-->Node<!--/paramType2-->
<!--paramDescription2-->
The DOM node of the item after which the specified item should be placed.
<!--/paramDescription2-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise of the jQuery Deferred object resolved if the item is moved and rejected if it is not.
<!--/returnDescription-->

<!--fullDescription-->
[note]This method reorders items in the [items](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#items) array, but it does not affect the [dataSource](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#dataSource).

#####See Also#####
- [List - Item Reordering API](/Documentation/Guide/Widgets/List/Item_Reordering/#API)
<!--/fullDescription-->