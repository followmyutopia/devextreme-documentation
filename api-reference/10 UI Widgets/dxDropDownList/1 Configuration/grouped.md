---
id: dxDropDownList.Options.grouped
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether data items should be grouped.

---
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
- [SelectBox - Grouped Items Demo](/Demos/WidgetsGallery/Demo/Select_Box/GroupedItems/jQuery/Light/)
- [TagBox - Grouped Items Demo](/Demos/WidgetsGallery/Demo/Tag_Box/GroupedItems/jQuery/Light/)
- [SelectBox - Grouping](/Documentation/Guide/Widgets/SelectBox/Grouping/)
- [TagBox - Grouping](/Documentation/Guide/Widgets/TagBox/Grouping/)