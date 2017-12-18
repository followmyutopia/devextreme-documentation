===================================================================
===================================================================

<!--shortDescription-->
Reorders items found using their DOM nodes.
<!--/shortDescription-->

<!--paramName1-->itemElement<!--/paramName1-->
<!--paramType1-->Node<!--/paramType1-->
<!--paramDescription1-->
The DOM node of the item to be reordered.
<!--/paramDescription1-->

<!--paramName2-->toItemElement<!--/paramName2-->
<!--paramType2-->Node<!--/paramType2-->
<!--paramDescription2-->
The DOM node of the item after which the reordered item should be placed.
<!--/paramDescription2-->

<!--returnType-->Promise<void><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved if the item is moved and rejected otherwise. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
[note]This method reorders items in the [items](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#items) array, but it does not affect the [dataSource](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#dataSource).

#####See Also#####
#include common-link-callmethods
- [List - Item Reordering API](/Documentation/Guide/Widgets/List/Item_Reordering/#API)
<!--/fullDescription-->