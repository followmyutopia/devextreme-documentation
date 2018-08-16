For an example of hierarchical data, see the following code snippet. 

    <!--JavaScript-->var hierarchicalData = [{
        id: '1',
        text: 'Fruits',
        items: [
            { id: '1_1', text: 'Apples' },
            { id: '1_2', text: 'Oranges' }
        ]
    }, {
        id: '2',
        text: 'Vegetables',
        items: [
            { id: '2_1', text: 'Cucumbers' },
            { id: '2_2', text: 'Tomatoes' }
        ]
    }];

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Tree_View/HierarchicalDataStructure/jQuery/Light/"
}

As you can see, all items in a hierarchical data source have the **id** and **text** fields, and items with children have the **items** field. Those are conventional field names defined by the [Default Item Template](/Documentation/ApiReference/UI_Widgets/dxTreeView/Default_Item_Template/) pattern. To use other names, change the [keyExpr](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#keyExpr), [displayExpr](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#displayExpr) and [itemsExpr](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#itemsExpr) options, respectively.

---
##### jQuery

    <!--JavaScript-->var hierarchicalData = [{
        key: '1',
        name: 'Fruits',
        children: [
            { key: '1_1', name: 'Apples' },
            { key: '1_2', name: 'Oranges' }
        ]
    }, {
        key: '2',
        name: 'Vegetables',
        children: [
            { key: '2_1', name: 'Cucumbers' },
            { key: '2_2', name: 'Tomatoes' }
        ]
    }];

    $(function() {
        $("#treeViewContainer").dxTreeView({
            dataSource: hierarchicalData,
            keyExpr: 'key',
            displayExpr: 'name',
            itemsExpr: 'children'
        });
    });

##### Angular

    <!--HTML--><dx-tree-view
        [dataSource]="hierarchicalData"
        keyExpr="key"
        displayExpr="name"
        itemsExpr="children">
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        hierarchicalData = [{
            key: '1',
            name: 'Fruits',
            children: [
                { key: '1_1', name: 'Apples' },
                { key: '1_2', name: 'Oranges' }
            ]
        }, {
            key: '2',
            name: 'Vegetables',
            children: [
                { key: '2_1', name: 'Cucumbers' },
                { key: '2_2', name: 'Tomatoes' }
            ]
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxTreeViewModule
        ],
        // ...
    })

---

Frequently, the **id** of an item is also its **text**. In this case, set both the **keyExpr** and **displayExpr** options to a single value.

---
##### jQuery

    <!--JavaScript-->var hierarchicalData = [{
        name: 'Fruits',
        items: [
            { name: 'Apples' },
            { name: 'Oranges' }
        ]
    }, {
        name: 'Vegetables',
        items: [
            { name: 'Cucumbers' },
            { name: 'Tomatoes' }
        ]
    }];

    $(function() {
        $("#treeViewContainer").dxTreeView({
            dataSource: hierarchicalData,
            keyExpr: 'name',
            displayExpr: 'name'
        });
    });

##### Angular

    <!--HTML--><dx-tree-view
        [dataSource]="hierarchicalData"
        keyExpr="name"
        displayExpr="name">
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        hierarchicalData = [{
            name: 'Fruits',
            items: [
                { name: 'Apples' },
                { name: 'Oranges' }
            ]
        }, {
            name: 'Vegetables',
            items: [
                { name: 'Cucumbers' },
                { name: 'Tomatoes' }
            ]
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxTreeViewModule
        ],
        // ...
    })

---

#####See Also#####
- [TreeView - Use Plain Data](/Documentation/Guide/Widgets/TreeView/Use_Plain_Data)
- [TreeView - Access a Node](/Documentation/Guide/Widgets/TreeView/Access_a_Node)
- [TreeView - Customize Node Appearance](/Documentation/Guide/Widgets/TreeView/Customize_Node_Appearance)
- [TreeView API Reference](/Documentation/ApiReference/UI_Widgets/dxTreeView/)

[tags]treeview, tree view, hierarchical data, tree-like data, tree data structure, keyExpr, displayExpr, itemsExpr