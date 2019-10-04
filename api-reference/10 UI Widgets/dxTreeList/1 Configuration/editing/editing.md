---
id: dxTreeList.Options.editing
type: Object
---
---
##### shortDescription
Configures editing.

---
The widget allows a user to edit data in several modes, which are detailed in the [mode](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#mode) option. To define what editing operations a user can perform, specify the  [allowAdding](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#allowAdding), [allowUpdating](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#allowUpdating) and [allowDeleting](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#allowDeleting) options. Before enabling an operation, make sure that your data source supports it.

[note] Editing does not work with [hierarchical data sources](/Documentation/Guide/Widgets/TreeList/Data_Binding/Use_Hierarchical_Data/) out of the box, but you can use the code sample from <a href="https://www.devexpress.com/Support/Center/Question/Details/T725094/treelist-how-to-perform-crud-operations-on-a-hierarchical-data-source" target="_blank">this KB</a> to implement it.


#####See Also#####
- [Editing](/Documentation/Guide/Widgets/TreeList/Editing/)