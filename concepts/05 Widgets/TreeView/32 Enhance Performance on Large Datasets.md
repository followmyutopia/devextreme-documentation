If the **TreeView** performance is low, consider enabling the Virtual Mode. In this mode, the **TreeView** loads a set of child nodes once their parent node is expanded. The Virtual Mode can be enabled only if your data source satisfies the following conditions.

- It has a [plain structure](/Documentation/Guide/Widgets/TreeView/Use_Plain_Data).
- Root nodes have the [parentId](/Documentation/ApiReference/UI_Widgets/dxTreeView/Default_Item_Template/#parentId) field set to the [rootValue](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#rootValue).
- Nodes that do not have children, have the [hasItems](/Documentation/ApiReference/UI_Widgets/dxTreeView/Default_Item_Template/#hasItems) field set to **false**.

To enable the Virtual Mode, set the [virtualModeEnabled](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#virtualModeEnabled) option to **true**.

---
##### jQuery

    <!--JavaScript-->var plainData = [
        { id: 1,  text: 'Fruits',     parentId: -1 },
        { id: 11, text: 'Apples',     parentId: 1, hasItems: false },
        { id: 12, text: 'Oranges',    parentId: 1, hasItems: false },
        { id: 2,  text: 'Vegetables', parentId: -1 },
        { id: 21, text: 'Cucumbers',  parentId: 2, hasItems: false },
        { id: 22, text: 'Tomatoes',   parentId: 2, hasItems: false }
    ];

    $(function() {
        $("#treeViewContainer").dxTreeView({
            dataSource: plainData,
            dataStructure: 'plain',
            virtualModeEnabled: true,
            rootValue: -1
        });
    });

##### Angular

    <!--HTML--><dx-tree-view
        [dataSource]="plainData"
        dataStructure="plain"
        [virtualModeEnabled]="true"
        [rootValue]="-1">
    </dx-tree-view>

    <!--TypeScript-->
    import { DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        plainData = [
            { id: 1,  text: 'Fruits',     parentId: -1 },
            { id: 11, text: 'Apples',     parentId: 1, hasItems: false },
            { id: 12, text: 'Oranges',    parentId: 1, hasItems: false },
            { id: 2,  text: 'Vegetables', parentId: -1 },
            { id: 21, text: 'Cucumbers',  parentId: 2, hasItems: false },
            { id: 22, text: 'Tomatoes',   parentId: 2, hasItems: false }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxTreeViewModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Tree_View/VirtualMode/jQuery/Light/"
}

If the Virtual Mode does not meet your requirements, you can get full control over nodes and how to load them in the [createChildren](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#createChildren) function. This function will be called at the beginning of the widget's lifetime and each time a user expands a node whose child nodes have not been loaded yet.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeViewContainer").dxTreeView({
            createChildren: function (parentNode) {
                var d = $.Deferred();
                $.get("http://url/to/the/service", {
                        parentId: parentNode ? JSON.stringify(parentNode.key) : "0"
                    })
                    .done(function (result) {
                        d.resolve(result);
                    });
                return d.promise();
            },
            dataStructure: 'plain'
        });
    });

##### Angular

    <!--HTML--><dx-tree-view
        [createChildren]="createChildren"
        dataStructure="plain">
    </dx-tree-view>

    <!--TypeScript-->
    import { ..., Inject } from "@angular/core";
    import { HttpClient, HttpClientModule, HttpParams } from "@angular/common/http";
    import "rxjs/add/operator/toPromise";
    import { DxTreeViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        constructor(@Inject(HttpClient) httpClient: HttpClient) { }
        createChildren = (parentNode) => {
            let params: HttpParams = new HttpParams()
                .set("parentId", parentNode ? JSON.stringify(parentNode.key) : "0");
            return httpClient.get("http://url/to/the/service", {
                    params: params
                })
                .toPromise();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeViewModule,
            HttpClientModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Tree_View/LoadDataOnDemand/jQuery/Light/"
}

#####See Also#####
- [TreeView - Expand and Collapse Nodes](/Documentation/Guide/Widgets/TreeView/Expand_and_Collapse_Nodes)
- [TreeView API Reference](/Documentation/ApiReference/UI_Widgets/dxTreeView/)

[tags]treeview, tree view, enhance performance, big data, large data, virtual mode, virtualModeEnabled, createChildren