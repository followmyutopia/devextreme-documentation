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

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/List/GroupedList/jQuery/Light/"
}

You can supply data to this structure using the **DataSource** object's [group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) option.

[note]Only one-level grouping is supported.

#####See Also#####
- [List - Grouping](/Documentation/Guide/Widgets/List/Grouping/In_the_Data_Source/)
<!--/fullDescription-->