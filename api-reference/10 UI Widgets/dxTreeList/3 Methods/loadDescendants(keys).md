---
id: dxTreeList.loadDescendants(keys)
---
---
##### shortDescription
Loads a specific node's descendants. Takes effect only if data has the [plain structure](/Documentation/Guide/Widgets/TreeList/Data_Binding/Use_Plain_Data/) and  **remoteOperations** | [filtering](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/remoteOperations/#filtering) is **true**.

##### return: Promise<void>
A Promise that is resolved after data is loaded. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(keys): Array<any>
Node keys.

---
