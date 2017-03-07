<!--playground--><!--/playground-->
<article data-show-web="/Content/Applications/16_1/Framework/DataGridTutorial/Step11/grid.html" data-show-first="grid.html">
Basically, searching and filtering in **DataGrid** are very similar. Filtering is searching in a single column. Due to this similarity, both filtering and searching are specified by the [allowFiltering](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowFiltering) option. If this option is set to *true* for a column, grid records can be filtered by the values of this column, and the values within this column can be searched.

Filtering can be performed using a [filter row](/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Filter_Row), whose settings are specified by options of the [filterRow](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterRow/) object. Additionally, an end-user can choose a filter to be applied to the column from a menu. This menu can be invoked by clicking a magnifying glass icon that accompanies the filter row cell of the columns where filtering is allowed.

Searching can be performed by typing a search string in a [search panel](/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Search_Panel), whose settings are specified by options of the [searchPanel](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/) object.

You can disable filtering or searching completely, if necessary. For this purpose, hide the filter row or the search panel by setting the **visible** option of the configuration object corresponding to the grid element to be hidden.

Configure the grid by making the filter row and search panel visible, and then move on to the final step, where you will learn how to adjust the selection functionality in the **DataGrid** widget.
</article>