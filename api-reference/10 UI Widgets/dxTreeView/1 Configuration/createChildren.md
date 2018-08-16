===========================================================================
<!--type-->function(parentNode)<!--/type-->
===========================================================================

<!--shortDescription-->
Allows you to load nodes manually.
<!--/shortDescription-->

<!--fullDescription-->
If you have a large data source hosted remotely, loading all of it may take considerable time. To quicken the process, you can load data for an individual node using the **createChildren** function. This function will be called at the beginning of the widget's lifetime and each time a user expands a node whose child nodes have not been loaded yet.

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
            dataStructure: "plain"
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

[note]The **createChildren** function applies only if the [dataStructure](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#dataStructure) option is set to *"plain"* and the [dataSource](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#dataSource) option is unspecified.

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