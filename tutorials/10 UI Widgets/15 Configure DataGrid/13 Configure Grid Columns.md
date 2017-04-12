<!--playground--><!--/playground-->
<article data-show-web="/Content/Applications/17_1/Framework/DataGridTutorial/Step4/grid.html" data-show-first="grid.html">
To configure grid columns, assign an array to the [columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) option. Each object in this array represents a column. If it is not necessary to specify column options except for the [data field](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataField), include the name of the data field in this array instead of the entire object. The order of objects/data fields in the **columns** array defines the resulting order of columns in a grid.

In this example, the *"Language"* column may be redundant if all books in the collection are written in one language. In which case, the column is omitted from the **columns** array. Data contained in the *"Price"* and *"Genre"* columns is optional either, but may be useful in some cases. Make these columns hidden by default by setting the **visible** option to *false* for them.

An end-user can make hidden columns visible using the [column chooser](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Column_Chooser) that can be invoked by a click on a button that appears in the upper-right corner of the grid layout. By default, the column chooser is disabled, so set the [enabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnChooser/#enabled) option of the **columnChooser** object to *true*. Additionally, adjust the width of the columns using the **width** option in order to make the grid more comprehensible.

If you run the code now, you will see the executed changes applied. Move to the next step to discover how to specify column reordering settings.

</article>