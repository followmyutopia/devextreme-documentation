<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Scrolls list to specified item.
<!--/d-->
<!--p1d-->The item index. For grouped list index represents as object with group and item indices e.g. { group: 0, item: 0 }.<!--/p1d-->
===================================================================
===================================================================

<!--shortDescription-->
Scrolls the list to the specified item.
<!--/shortDescription-->

<!--paramName1-->itemIndex<!--/paramName1-->
<!--paramType1-->Number|Object<!--/paramType1-->
<!--paramDescription1-->
The target element index.
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
<!--/fullDescription-->