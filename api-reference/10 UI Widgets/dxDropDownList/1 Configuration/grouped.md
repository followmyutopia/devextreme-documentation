<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->false<!--/default-->
<!--type-->boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether data items should be grouped.
<!--/shortDescription-->

<!--fullDescription-->
When you set this option to *true*, make sure that all data source objects have the following structure.

    <!--JavaScript-->var dataSource = [{
        key: "Group 1", // Group caption 
        items: [ // Items in the group
            { ... },
            { ... }
        ]
    }, {
        // ...
    }];

You can bring data to this structure using the [group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) option of the **DataSource** object.

#####See Also#####
- [SelectBox - Grouped Items Demo](http://js.devexpress.com/Demos/WidgetsGallery/Demo/Select_Box/GroupedItems/jQuery/Light/)
- [TagBox - Grouped Items Demo](http://js.devexpress.com/Demos/WidgetsGallery/Demo/Tag_Box/GroupedItems/jQuery/Light/)
<!--/fullDescription-->
