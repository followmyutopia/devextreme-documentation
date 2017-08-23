The popup mode is the [form mode](/Documentation/Guide/Widgets/TreeList/Editing/#User_Interaction/Form_Mode) with the form placed in a popup window.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList Editing Popup Mode](/Content/images/doc/17_2/treelist/editing/popup_mode.png)

Use the **editing**.[popup](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#popup) object to customize the popup window. Refer to the [Popup Configuration](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/) section to learn which fields this object can contain.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            editing: {
                allowUpdating: true,
                mode: "popup",
                form: {
                    labelLocation: "top"
                },
                popup: {
                    showTitle: true,
                    title: "Row in the editing state"
                }
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-editing
            [allowUpdating]="true"
            mode="popup">
            <dxo-form labelLocation="top"></dxo-form>
            <dxo-popup [showTitle]="true" title="Row in the editing state"></dxo-popup>
        </dxo-editing>
    </dx-tree-list>
    
---

Since the popup and form modes are very similar, you can use the same **columns**.[formItem](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#formItem) and **editing**.[form](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#form) options to customize items and layout in both modes. See the [Form Mode](/Documentation/Guide/Widgets/TreeList/Editing/#User_Interaction/Form_Mode) topic for more details on form customization.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/PopupEditing/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>
