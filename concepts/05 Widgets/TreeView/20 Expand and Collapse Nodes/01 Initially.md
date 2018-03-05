If a node is supposed to be expanded initially, set its [expanded](/Documentation/ApiReference/UI_Widgets/dxTreeView/Default_Item_Template/#expanded) field to **true**. This is a conventional field name defined by the [Default Item Template](/Documentation/ApiReference/UI_Widgets/dxTreeView/Default_Item_Template/) pattern. If another field specifies whether a node is expanded or collapsed, assign its name to the [expandedExpr](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#expandedExpr) option as shown in the following code.

---
##### jQuery

    <!--JavaScript-->var hierarchicalData = [{
        name: 'Fruits',
        isExpanded: true,
        items: [
            { name: 'Apples' },
            { name: 'Oranges' }
        ]
    }, {
        name: 'Vegetables',
        isExpanded: true,
        items: [
            { name: 'Cucumbers' },
            { name: 'Tomatoes' }
        ]
    }];

    $(function() {
        $("#treeViewContainer").dxTreeView({
            dataSource: hierarchicalData,
            keyExpr: 'name',
            displayExpr: 'name',
            expandedExpr: 'isExpanded'
        });
    });

##### Angular

    <!--HTML--><dx-tree-view
        [dataSource]="hierarchicalData"
        keyExpr="name"
        displayExpr="name"
        expandedExpr="isExpanded">
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        hierarchicalData = [{
            name: 'Fruits',
            isExpanded: true,
            items: [
                { name: 'Apples' },
                { name: 'Oranges' }
            ]
        }, {
            name: 'Vegetables',
            isExpanded: true,
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