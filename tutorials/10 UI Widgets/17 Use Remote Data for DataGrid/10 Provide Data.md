<!--playground--><!--/playground-->
<article data-show-web="/Content/Applications/17_1/Framework/UseRemoteDataforDataGrid/Step3/grid.html" data-show-first="grid.html">
  
- Create a [CustomStore](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources) object to get JSON data from the file added in the previous step.  
    The Custom Store that will be used for the **DataGrid** data source must include the **load** method and a specified total count of data source items. In the code below, the **load** function gets JSON data from the specified URL. You can make a more complex request to get filtered or sorted data, taking the load options passed as a parameter into account.

- Assign a configuration object for the DataSource object to the **dataSource** grid option. For details on grid data binding, refer to the [Data Binding](/Documentation/Guide/Widgets/DataGrid/Data_Binding/) article.

The **DataGrid** widget assumes local sorting by default. So, you can sort records in a column by clicking its [header](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Columns/Configuring_Column_Headers).

At this step, you can run the project and see that the grid is displayed with all loaded data.

</article>