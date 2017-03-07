<!--playground--><!--/playground-->
<article data-show-web="/Content/Applications/16_2/Framework/DataGridTutorial/Step12/grid.html" data-show-first="grid.html">
Selection in the **DataGrid** widget can be carried out in a single or multiple mode. The single mode is preferable when you only require one grid record to be selected at a time. In this mode, when a user selects another record, the previously selected record becomes unselected. To set this mode, assign *"single"* to the **selection** | [mode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#mode) option.

When selecting several grid records is required, set the multiple selection mode. In this mode, a grid is supplemented with a [selection column](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Selection_Column) that contains check boxes accompanying each grid record. A user can select grid records using these check boxes.

For the grid with books, selection is not necessary, so the **selection** | **mode** option is set to *none* in the code in the playground below. However, you can experiment with it and try to assign *"single"* or *"multiple"* to the aforementioned option.

In this tutorial, you have learned to configure the basic features of the **DataGrid** widget. For the full list of its options, you see our [Reference](/Documentation/ApiReference/UI_Widgets/dxDataGrid/) section. In case you want to see **DataGrid** demos, visit our [Visualization Gallery](http://js.devexpress.com/Demos/DataGridGallery).
</article>