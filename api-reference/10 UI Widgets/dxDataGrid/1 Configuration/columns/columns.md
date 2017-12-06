===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->Array<dxDataGrid_Options_columns><!--/type-->
===========================================================================

<!--shortDescription-->
An array of grid columns.
<!--/shortDescription-->

<!--fullDescription-->
By default, a column is created for each field of a data source object, but in most cases, it is redundant. To specify a set of columns to be created in a grid, assign an array specifying these columns to the **columns** option. Each grid column is represented in this array by an object containing column settings or by a data source field that this column is bound to. Detailed information on specifying grid columns is given in the [Columns Overview](/Documentation/Guide/Widgets/DataGrid/Columns/Overview/) article.

Column options define the behavior and appearance of a grid column. One of the other capabilities allows you to control the sorting of column values using the [allowSorting](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowSorting) and [sortOrder](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#sortOrder) options, apply a filter to grid records using the [allowFiltering](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowFiltering) and [filterOperations](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#filterOperations) options, and group grid records using the [allowGrouping](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowGrouping) and [groupIndex](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex) options. In addition, you can change the [visibility](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#visible) and [width](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#width) of a column using corresponding options.

To get or set an option or several options for a column at runtime, use the [columnOption](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#columnOptionid) method with the required arguments.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridcolumnscolumncustomization/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="https://www.youtube.com/watch?v=FAZJ4fHjfss&index=3&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [Column Types](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/)
- [Customize Column Headers](/Documentation/Guide/Widgets/DataGrid/Columns/Customize_Column_Headers/)
- [Column Sizing](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Sizing/)
- [Column Reordering](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Reordering/)
- [Column Fixing](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Fixing/)
- [Hide a Column Using the API](/Documentation/Guide/Widgets/DataGrid/Columns/Hide_a_Column_Using_the_API/)
- [Adaptability](/Documentation/Guide/Widgets/DataGrid/Columns/Adaptability/)
- [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/)
<!--/fullDescription-->