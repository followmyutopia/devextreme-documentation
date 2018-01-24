===========================================================================
<!--default-->'tree'<!--/default-->
<!--acceptValues-->'plain' | 'tree'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether a nested or plain array is used as a data source.
<!--/shortDescription-->

<!--fullDescription-->
If the option is set to 'tree', the array should have a tree structure. This means that each item can contain the **items** field, which contains an array of nested items.

    <!--JavaScript-->
    var treeViewData = [
        {
            id: 1,
            items: [
                { id: 11 },
                { id: 12 },
                { 
                    id: 13,
                    items: [
                        { id: 131 },
                        { id: 132 },
                        { id: 133 },
                    ]
                },
            ]
        },
        { id: 2 }
    ];

If the **dataStructure** option value is 'plain', the array should have a plain structure. In this case, each array item should contain the **parentId** field, which specifies the key of the parent item.

    <!--JavaScript-->
    var treeViewData = [
        { id: 1, parentId: 0 },
        { id: 11, parentId: 1 },
        { id: 12, parentId: 1 },
        { id: 13, parentId: 1 },
        { id: 131, parentId: 13 },
        { id: 132, parentId: 13 },
        { id: 133, parentId: 13 },
        { id: 2, parentId: 0 }
    ];

[note]If the **dataStructure** option is set to 'plain', the widget requires you to specify at least one root item. An item is used as a root item if its **parentId** field holds **0** or **null**.

[note]The widget requires each data item to have a key field whose value is unique within the entire array.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `TreeViewDataStructure` enum. This enum accepts the following values: `Plain` and `Tree`.

#####See Also#####
- [TreeView - Use Hierarchical Data](/Documentation/Guide/Widgets/TreeView/Use_Hierarchical_Data/)
- [TreeView - Use Plain Data](/Documentation/Guide/Widgets/TreeView/Use_Plain_Data/)
<!--/fullDescription-->