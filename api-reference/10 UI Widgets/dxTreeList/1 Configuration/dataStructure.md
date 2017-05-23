<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'plain'<!--/default-->
<!--acceptValues-->'plain' | 'tree'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Notifies the widget of your data structure.
<!--/shortDescription-->

<!--fullDescription-->
By default, the widget expects that data has a plain structure where each data item contains a *"parentId"* field and a unique *"id"* field. For items of the highest hierarchical level, *"parentId"* should be *0*, *null* or *undefined* indicating that these items belong to the root node. The root node holds the entire hierarchy and is not visualized.

    <!--JavaScript-->
    var treeListData = [
        { id: 1, parentId: 0 },
        { id: 11, parentId: 1 },
        { id: 12, parentId: 1 },
        { id: 13, parentId: 1 },
        { id: 131, parentId: 13 },
        { id: 132, parentId: 13 },
        { id: 133, parentId: 13 },
        { id: 2, parentId: 0 }
    ];

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/LocalDataPlainStructure/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

If your data has a hierarchical structure where each data item contains nested items, set this option to *"tree"*. Parent and item IDs will be generated automatically.

    <!--JavaScript-->
    var treeListData = [{
        text: "item1",
        items: [{ 
            text: "item11" 
        }, { 
            text: "item12",
            items: [
                { text: "item121" }, 
                { text: "item122" }
            ]
        }]
    }, { 
        text: "item2" 
    }];

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/LocalDataHierarchicalStructure/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [Use Plain Data](/Documentation/Guide/Widgets/TreeList/Data_Binding/Use_Plain_Data/)
- [Use Hierarchical Data](/Documentation/Guide/Widgets/TreeList/Data_Binding/Use_Hierarchical_Data/)
- [parentIdExpr](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#itemsExpr)
- [keyExpr](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#keyExpr)
- [rootValue](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#rootValue)
- [itemsExpr](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#itemsExpr)
<!--/fullDescription-->