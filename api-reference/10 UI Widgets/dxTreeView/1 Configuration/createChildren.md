<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->function<!--/type-->
===========================================================================

<!--shortDescription-->
Allows you to load nodes manually.
<!--/shortDescription-->

<!--fullDescription-->
If you have a large data source hosted remotely, loading all of it may take considerable time. To quicken the process, you can load data for an individual node using the **createChildren** function. This function will be called at the beginning of the widget's lifetime and each time a user expands a node whose child nodes have not been loaded yet.

In the following code, the **createChildren** function makes a query to the server passing the `parentNode` object. The structure of this object is described in the [Node](/Documentation/ApiReference/UI_Widgets/dxTreeView/Node/) section.

    <!--JavaScript-->$(function() {
        $("#treeViewContainer").dxTreeView({
            createChildren: function (parentNode) {
                var d = $.Deferred();
                $.get("http://url/to/the/service", parentNode).done(function (result) {
                    d.resolve(result);
                });
                return d.promise();
            },
            dataStructure: 'plain'
        });
    });

[note]The **createChildren** function applies only if the [dataStructure](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#dataStructure) option is set to *"plain"* and the [dataSource](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#dataSource) option is unspecified.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_View/LoadDataOnDemand/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>


#####See Also#####
- [Enhance Performance on Large Datasets](/Documentation/Guide/Widgets/TreeView/Enhance_Performance_on_Large_Datasets/)
- [TreeView - Use Plain Data](/Documentation/Guide/Widgets/TreeView/Use_Plain_Data/)
<!--/fullDescription-->
<!--typeFunctionParamName1-->parentNode<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->dxtreeviewnode<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The node that has been expanded; **null** for the root node.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->Promise|array<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A Promise of a Deferred object resolved with the result from the server or an array of objects to be converted to child nodes.
<!--/typeFunctionReturnDescription-->