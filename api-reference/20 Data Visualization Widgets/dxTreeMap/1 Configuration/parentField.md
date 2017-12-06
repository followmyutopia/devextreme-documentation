===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the name of the data source field that provides parent IDs for items. Applies to plain [data sources](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#dataSource) only.
<!--/shortDescription-->

<!--fullDescription-->
In certain cases, you may have a plain data source that implies a hierarchical structure. For example, the following code declares a data source that, despite being plain, can be rearranged into a hierarchy of two groups with two items in each.

    <!--JavaScript-->var treeMapOptions = {
        // ...
        dataSource: [
            // Group 1
            { id: 1, name: 'Fruits'},
            { parent: 1, name: 'Apples', value: 10 },
            { parent: 1, name: 'Oranges', value: 13 },
            
            // Group 2
            { id: 2, name: 'Vegetables' },
            { parent: 2, name: 'Cucumbers', value: 4 },
            { parent: 2, name: 'Tomatoes', value: 8 }
        ]
    };

Note that in this data source, objects that have children have the *"id"* field whose value is unique. Their children have the *"parent"* field pointing at the parent's ID. The *"id"* and *"parent"* fields can have other names, but in any case they must be assigned to the [idField](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#idField) and **parentField** options.

    <!--JavaScript-->var treeMapOptions = {
        // ...
        idField: 'id',
        parentField: 'parent'
    };
<!--/fullDescription-->