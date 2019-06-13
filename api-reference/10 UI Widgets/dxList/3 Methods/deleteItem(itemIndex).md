<!--id-->dxList.deleteItem(itemIndex)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Removes an item with a specific index.
<!--/shortDescription-->

<!--paramName1-->itemIndex<!--/paramName1-->
<!--paramType1-->Number|Object<!--/paramType1-->
<!--paramDescription1-->
The item's index. If the items are grouped, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.
<!--/paramDescription1-->

<!--returnType-->Promise<void><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved if the item is deleted and rejected otherwise. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
#####See Also#####
#include common-link-callmethods
- [List - Item Deletion API](/Documentation/Guide/Widgets/List/Item_Deletion/#API)
<!--/fullDescription-->