===================================================================
===================================================================

<!--shortDescription-->
Reorders items with specific indexes.
<!--/shortDescription-->

<!--paramName1-->itemIndex<!--/paramName1-->
<!--paramType1-->Number|Object<!--/paramType1-->
<!--paramDescription1-->
The index of the item to be reordered.
<!--/paramDescription1-->

<!--paramName2-->toItemIndex<!--/paramName2-->
<!--paramType2-->Number|Object<!--/paramType2-->
<!--paramDescription2-->
The index of the item after which the reordered item should be placed.
<!--/paramDescription2-->

<!--returnType-->Promise<void><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved if the item is moved and rejected otherwise. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
If the widget displays a grouped list, the item index should be specified like the following.

    <!--JavaScript-->
    {
        group: 1,
        index: 1
    }

Where the **group** property specifies the group index, and the **index** property specifies the index of the required item within the group.

    <!--JavaScript-->
    $("#myList").dxList("instance").reorderItem({
        group: 1,
        index: 4
    },
    {
        group: 3,
        index: 2
    });

This code will move the 4th item of the 1st group to the 3rd position in the 3rd group.

[note]This method reorders items in the [items](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#items) array, but it does not affect the [dataSource](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#dataSource).

#####See Also#####
#include common-link-callmethods
- [List - Item Reordering API](/Documentation/Guide/Widgets/List/Item_Reordering/#API)
<!--/fullDescription-->