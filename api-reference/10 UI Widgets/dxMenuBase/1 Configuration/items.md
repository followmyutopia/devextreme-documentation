===========================================================================
<!--type-->Array<dxMenuBaseItem><!--/type-->
===========================================================================

<!--shortDescription-->
Holds an array of menu items.
<!--/shortDescription-->

<!--fullDescription-->
To display menu items, a default template can be used. This template is based on certain fields of the item object. Refer to the [Default Item Template]({basewidgetpath}/Default_Item_Template/) section to learn which fields are taken into account when creating a default template for items. Alternatively, you can implement a custom item template. 

[note] Each item of the array passed to the **items** option can include the **items** field, which takes on an object with the same structure as a root item. Therefore, you can create as many menu levels as you need.

<!--/fullDescription-->