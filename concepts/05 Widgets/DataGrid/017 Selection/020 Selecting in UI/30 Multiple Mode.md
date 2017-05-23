When you need to select several rows at once, set the multiple selection mode. This mode supplements a grid with a [selection column](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Selection_Column) that contains check boxes accompanying each grid row. A user can select rows using these check boxes. In a multiple mode, when a user clicks different rows, the grid behaves like the selection mode is single (see the previous subtopic), but once a user clicks a checkbox, grid behavior changes. From this point forward, clicking a row selects it. But after a user deselects all rows, the grid behavior reverts to the single-like as described above.

![DevExtreme DataGrid Selection](/Content/images/doc/17_1/DataGrid/SelectionMultiple.gif)

The selection column enables a user to select all rows at once. This feature is controlled by the [allowSelectAll](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#allowSelectAll) option of the **selection** object, which is *true* by default. To disable the feature, set this option to *false*. Note that the user will still be able to deselect all rows at once.

    <!--JavaScript-->$("#gridContainer").dxDataGrid({
        // ...
        selection: {
            mode: 'multiple',
            allowSelectAll: false
        }
    });

When selecting all the rows, you can define how rows are selected: on the currently rendered pages or on all pages. For this purpose, specify the [selectAllMode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#selectAllMode) option.

    <!--JavaScript-->$("#gridContainer").dxDataGrid({
        // ...
        selection: {
            mode: 'multiple',
            allowSelectAll: true,
            selectAllMode: 'page' // or 'allPages'
        }
    });

By default, multiple selection is instant, but it can also be deferred. For details, see the [Deferred Selection](/Documentation/Guide/Widgets/DataGrid/Features_for_Remote_Data/Deferred_Selection/) topic.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridselectionmultipleselection/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [Handling the Selection Event](/Documentation/Guide/Widgets/DataGrid/Selection/#Handling_the_Selection_Event)

