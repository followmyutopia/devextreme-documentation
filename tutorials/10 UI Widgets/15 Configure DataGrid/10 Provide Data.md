<!--playground--><!--/playground-->
<article data-show-web="/Content/Applications/16_1/Framework/DataGridTutorial/Step3/grid.html" data-show-first="grid.html">
**DataGrid** supports two types of data sources: an array of objects and a DataSource object. When an array of objects is used, fields of each object from this array provide data for corresponding grid columns. Using a DataSource object is a more sophisticated but flexible approach to providing data. This object is specially designed to easily retrieve data from any storage (local, memory or a data service). As a stateful object, DataSource includes options for data sorting, grouping, filtering; it also keeps data transformation options and applies them each time data is loaded. To learn more about the DataSource object, refer to the [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/) topic.

Although the DataSource object provides a wider range of capabilities, it is more complex than an array of plain objects. For the sake of simplicity, this tutorial will use the array of objects.  A grid with a remote data source is demonstrated in the [Use Remote Data for DataGrid](/Documentation/Tutorial/UI_Widgets/Use_Remote_Data_for_DataGrid/#Use_Remote_Data_for_DataGrid) tutorial.

To provide data for the grid, declare an array of objects. Assign the array to the [dataSource](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource) option of **DataGrid**.
 
Each object in this array contains information about a book. Run the resulting code and you will see a grid with columns generated for each field of the objects in the assigned array. In the next step, you will configure the appearance of these columns.

#####See Also#####
- [Data Binding Guide](/Documentation/Guide/UI_Widgets/Data_Grid/Data_Binding/) - information about providing and binding your data to the **DataGrid** widget

</article>