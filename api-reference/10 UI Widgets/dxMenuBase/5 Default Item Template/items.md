===========================================================================
<!--type-->Array<dxMenuBaseItem><!--/type-->
===========================================================================

<!--shortDescription-->
Holds an array of menu items.
<!--/shortDescription-->

<!--fullDescription-->
When specifying the **items** field for an item, this item becomes a root item. The child items are displayed using the same default item template as the root items. So specify the fields that take part in the default item template when defining **items** array objects. Alternatively, you can implement a custom item template. 

[note] Each item of the array passed to the items option can include an items field, which takes on an object with the same structure as a root item. Therefore, you can create as many menu levels as you need.

#####See Also#####
- [Default Templates](/Documentation/Guide/Widgets/Common/Templates/#Default_Templates)
<!--/fullDescription-->