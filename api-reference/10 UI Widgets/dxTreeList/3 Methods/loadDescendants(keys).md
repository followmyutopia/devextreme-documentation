<!--id-->dxTreeList.loadDescendants(keys)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Loads a specific node's descendants. Takes effect only if data has the [plain structure](/Documentation/Guide/Widgets/TreeList/Data_Binding/Use_Plain_Data/) and  **remoteOperations** | [filtering](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/remoteOperations/#filtering) is **true**.
<!--/shortDescription-->

<!--paramName1-->keys<!--/paramName1-->
<!--paramType1-->Array<any><!--/paramType1-->
<!--paramDescription1-->
Node keys.
<!--/paramDescription1-->

<!--returnType-->Promise<void><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after data is loaded. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->

<!--/fullDescription-->