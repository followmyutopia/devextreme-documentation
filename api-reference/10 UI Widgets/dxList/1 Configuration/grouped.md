===========================================================================
<!--default-->false<!--/default-->
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether data items should be grouped.
<!--/shortDescription-->

<!--fullDescription-->
When this option is **true**, make sure that all data source objects have the following structure:

    <!--JavaScript-->var dataSource = [{
        key: "Group 1", // Group caption 
        items: [ // Items in the group
            { ... },
            { ... }
        ]
    }, {
        // ...
    }];

You can supply data to this structure using the **DataSource** object's [group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) option.

[note]Only one-level grouping is supported.

#####See Also#####
- [List - Grouping](/Documentation/Guide/Widgets/List/Grouping/In_the_Data_Source/)

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandlistslistlistgroupedlist/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->