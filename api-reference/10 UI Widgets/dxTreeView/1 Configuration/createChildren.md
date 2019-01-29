===========================================================================
<!--type-->function(parentNode)<!--/type-->
===========================================================================

<!--shortDescription-->
Allows you to load nodes. Applies if the [dataStructure](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#dataStructure) is *"plain"* and the [dataSource](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#dataSource) and [items](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#items) are undefined.
<!--/shortDescription-->

<!--fullDescription-->
This function is called at the beginning of the widget's lifetime and each time a user expands a node whose child nodes have not been loaded yet. It allows you to load the entire tree in portions: load root nodes first (when the function's **parentNode** parameter is **null**) and the child nodes of each expanded node later.

The following code shows how to use this function with a remote service:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeViewContainer").dxTreeView({
            dataStructure: "plain",
            rootValue: 0, 
            createChildren: function (parentNode) {
                var d = $.Deferred();
                $.get("http://url/to/the/service", {
                        // Here, 0 is the "rootValue" option's value.
                        parentId: parentNode ? JSON.stringify(parentNode.key) : "0" 
                    })
                    .done(function (result) {
                        d.resolve(result);
                    });
                return d.promise();
            }
        });
    });

##### Angular

    <!--HTML--><dx-tree-view
        [rootValue]="0"
        dataStructure="plain"
        [createChildren]="createChildren">
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
                // Here, 0 is the "rootValue" option's value.
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
- [Enhance Performance on Large Datasets](/Documentation/Guide/Widgets/TreeView/Enhance_Performance_on_Large_Datasets/)
- [TreeView - Use Plain Data](/Documentation/Guide/Widgets/TreeView/Use_Plain_Data/)
<!--/fullDescription-->
<!--typeFunctionParamName1-->parentNode<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->dxTreeViewNode<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The node that has been expanded; **null** for the root node.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->Promise<any>|Array<Object><!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A Promise that is resolved with the result from the server or an array of objects to be converted to child nodes.
<!--/typeFunctionReturnDescription-->