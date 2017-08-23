In some cases, the widget contains so many columns that they cause horizontal scrolling. If specific columns should be on screen constantly regardless of how far the widget is scrolled, a user can fix them.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList ColumnFixing](/Content/images/doc/17_2/treelist/visual_elements/column_fixing.png)

To allow this, set the **columnFixing**.[enabled](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columnFixing/#enabled) option to **true**. If a user should never fix (or unfix) a specific column, set its [allowFixing](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#allowFixing) option to **false**.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            columnFixing: {
                enabled: true
            },
            columns: [{
                // ...
                allowFixing: false
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-column-fixing [enabled]="true"></dxo-column-fixing>
        <dxi-column [allowFixing]="true" ... ></dxi-column>
    </dx-tree-list>
    
---

If a column should be fixed initially, assign **true** to its [fixed](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#fixed) option and specify its target position in the widget using the [fixedPosition](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#fixedPosition) option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            columns: [{
                // ...
                fixed: true,
                fixedPosition: "left"
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column [fixed]="true" fixedPosition="left" ... ></dxi-column>
    </dx-tree-list>
    
---

[note] Once you assign **true** to the **columnFixing**.**enabled** or **fixed** option, [command columns](/Documentation/Guide/Widgets/TreeList/Columns/Column_Types/Command_Columns/) become fixed automatically.

Since column fixing is effective only with horizontal scrolling, using it makes sense only if the [columnAutoWidth](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#columnAutoWidth) option is **false** and when the total width of columns exceeds the container width. Otherwise, fixed columns behave just like regular ones.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/ColumnFixing/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [Adaptability](/Documentation/Guide/Widgets/TreeList/Columns/Adaptability/)