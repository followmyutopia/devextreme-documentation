===================================================================
===================================================================

<!--shortDescription-->
Scrolls the content to an item with a specific index.
<!--/shortDescription-->

<!--paramName1-->itemIndex<!--/paramName1-->
<!--paramType1-->Number|Object<!--/paramType1-->
<!--paramDescription1-->
The item's index.
<!--/paramDescription1-->

<!--fullDescription-->
If the widget displays a grouped list, specify the target item index using an object containing the following fields.

- **group**  
 Specifies the index of the group containing the target item.

- **item**  
 Specifies the item index within the specified group.

<!---->

    <!--JavaScript-->
    var list = $("#myList").dxList("instance");
    list.scrollToItem({
        group: 3,
        item: 8
    });

#####See Also#####
#include common-link-callmethods
- [List - Scrolling API](/Documentation/Guide/Widgets/List/Scrolling/#API)
<!--/fullDescription-->