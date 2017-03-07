If your data service supports no remote operations, you can force the widget to perform all operations locally by setting the [remoteOperations](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/) option to *false*. Moreover, when disabling the **paging** remote operation, you do not have to specify a total count of records for the grid as well (the **totalCount** function can be left without implementation). In this case, you can simply assign the URL of a web service to the dataSource option of the grid to define the remote data source.

	<!--JavaScript-->var gridDataSource = 'http://mydomain.com/MyDataService';

In this case, all operations (filtering, sorting, paging, grouping and summary calculation) are performed on a client browser.

[note] By default, the **DataGrid** [caches](/Documentation/Guide/UI_Widgets/Data_Grid/Data_Binding/#Data_Caching) fetched data. Disabling of the remote operations or data cache may affect grid performance if the data set is large enough.