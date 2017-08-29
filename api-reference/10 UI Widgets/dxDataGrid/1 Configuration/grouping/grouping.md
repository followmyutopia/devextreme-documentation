<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies grouping settings and the behavior of [grouped](/Documentation/Guide/Widgets/DataGrid/Grouping/) grid records.
<!--/shortDescription-->

<!--fullDescription-->
An end-user can group data using the [group panel](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Group_Panel), the context menu appearing by a click on a column header, or both. The following list provides an overview of grouping settings that you can specify using the **grouping** object.

* **Enabling**      
To enable grouping using the context menu, assign **true** to the [contextMenuEnabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#contextMenuEnabled) option. Also, you can enable grouping using the group panel. For this purpose, assign **true** or *"auto"* to the **groupPanel**.[visible](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/groupPanel/#visible) option.

    ---
    #####jQuery

        <!--JavaScript-->
        $(function () {
            $("#dataGridContainer").dxDataGrid({
                grouping: {
                    contextMenuEnabled: true 
                },
                groupPanel: {
                    visible: true 
                }
            });
        });

    #####Angular

        <!--HTML-->
        <dx-data-grid ... >
            <dxo-grouping [contextMenuEnabled]="true"></dxo-grouping>
            <dxo-group-panel [visible]="true"></dxo-group-panel>
        </dx-data-grid>

    ---
    
    If you need to disable grouping for an individual column, assign **false** to the [allowGrouping](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowGrouping) property of this column.
* **Behavior**      
There are two modes defining how the user expands/collapses groups. The *"buttonClick"* mode is suitable for medium- and large-screen devices. The *"rowClick"* mode is designed for small-screen devices, though it performs perfectly on the others as well. For more information on these modes, see the [expandMode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#expandMode) option.

    ---
    #####jQuery

        <!--JavaScript-->
        $(function () {
            $("#dataGridContainer").dxDataGrid({
                grouping: {
                    // ...
                    expandMode: 'buttonClick' // or 'rowClick'
                }
            });
        });

    #####Angular

        <!--HTML-->
        <dx-data-grid ... >
            <dxo-grouping [expandMode]="buttonClick"></dxo-grouping> <!-- or 'rowClick' -->
        </dx-data-grid>

    ---

    A group can appear either expanded or collapsed initially. To specify that, use the [autoExpandAll](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#autoExpandAll) option. Also, you can disallow the user to collapse groups. For this purpose, assign **false** to the [allowCollapsing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#allowCollapsing) option.
    
    ---
    #####jQuery

        <!--JavaScript-->
        $(function () {
            $("#dataGridContainer").dxDataGrid({
                grouping: {
                    // ...
                    autoExpandAll: true, 
                    allowCollapsing: false 
                }
            });
        });

    #####Angular

        <!--HTML-->
        <dx-data-grid ... >
            <dxo-grouping 
                [autoExpandAll]="true" 
                [allowCollapsing]="false">
            </dxo-grouping>
        </dx-data-grid>

    ---

    Additionally, you can collapse/expand grid groups from code using the [collapseAll(groupIndex)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#collapseAllgroupIndex) and [expandAll(groupIndex)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#expandAllgroupIndex) methods.

#####See Also#####
- [groupPanel](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/groupPanel/) - configures the [group panel](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Group_Panel).
- [expandAll(groupIndex)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#expandAllgroupIndex) and [collapseAll(groupIndex)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#collapseAllgroupIndex) - expand/collapse groups in code.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridgroupinglocaldatagrouping/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->