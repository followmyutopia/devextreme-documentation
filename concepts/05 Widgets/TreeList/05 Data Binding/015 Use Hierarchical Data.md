If you use hierarchical data, set the [dataStructure](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataStructure) option to *'tree'*. For an example of hierarchical data, see the following code.

---
##### jQuery

    <!--JavaScript-->
    var hierarchicalData = [{
        fullName: "John Heart",
        position: "CEO",
        city: "Los Angeles",
        items: [{
            fullName: "Samantha Bright",
            position: "COO",
            city: "Los Angeles",
            items: [{
                fullName: "Kevin Carter",
                position: "Shipping Manager",
                city: "Los Angeles"
            }]
        }]
    }, {
        fullName: "Robin Cosworth",
        position: "Shipping Assistant",
        city: "Los Angeles"
    }];

    $(function() {
        $("#treeListContainer").dxTreeList({
            dataSource: hierarchicalData,
            dataStructure: 'tree'
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        hierarchicalData = [{
            fullName: "John Heart",
            position: "CEO",
            city: "Los Angeles",
            items: [{
                fullName: "Samantha Bright",
                position: "COO",
                city: "Los Angeles",
                items: [{
                    fullName: "Kevin Carter",
                    position: "Shipping Manager",
                    city: "Los Angeles"
                }]
            }]
        }, {
            fullName: "Robin Cosworth",
            position: "Shipping Assistant",
            city: "Los Angeles"
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML--><dx-tree-list
        [dataSource]="hierarchicalData"
        dataStructure="tree">
    </dx-tree-list>

---

All items with children have the **items** field. If you use another name for this field, specify it in the [itemsExpr](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#itemsExpr) option.

---
##### jQuery

    <!--JavaScript-->
    var hierarchicalData = [{
        fullName: "John Heart",
        position: "CEO",
        city: "Los Angeles",
        children: [{
            fullName: "Samantha Bright",
            position: "COO",
            city: "Los Angeles",
            children: [{
                fullName: "Kevin Carter",
                position: "Shipping Manager",
                city: "Los Angeles"
            }]
        }]
    }];

    $(function() {
        $("#treeListContainer").dxTreeList({
            dataSource: hierarchicalData,
            dataStructure: 'tree',
            itemsExpr: 'children'
        });
    });

##### Angular

    <!--HTML--><dx-tree-list
        [dataSource]="hierarchicalData"
        dataStructure="tree"
        itemsExpr="children">
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        hierarchicalData = [{
            fullName: "John Heart",
            position: "CEO",
            city: "Los Angeles",
            children: [{
                fullName: "Samantha Bright",
                position: "COO",
                city: "Los Angeles",
                children: [{
                    fullName: "Kevin Carter",
                    position: "Shipping Manager",
                    city: "Los Angeles"
                }]
            }]
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

---

When you load data from a remote source, and your data objects have a field that defines whether a row has nested rows, assign this field name to the [hasItemsExpr](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#hasItemsExpr) option. It will notify the widget which rows do not need the expand button. 

#####See Also#####
- [TreeList - Use Plain Data](/Documentation/Guide/Widgets/TreeList/Data_Binding/Use_Plain_Data/)
- [TreeList API Reference](/Documentation/ApiReference/UI_Widgets/dxTreeList/)

[tags]treeList, hierarchical data, tree-like data, tree data structure, dataStructure, children, itemsExpr
