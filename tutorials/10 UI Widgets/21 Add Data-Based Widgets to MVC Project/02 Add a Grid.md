<article data-show-web="/Content/Applications/16_1/Framework/UseRemoteDataforDataGrid/Solution/grid.html">
- Open the Index view and add a **div** element that will contain the widget.

        <!--HTML--><div id="myGrid"></div>

    
- Open the *script.js* file, which you added previously. Add the following code.
 
        <!--JavaScript-->
        $(function () {
            // Creates a **DataGrid** widget using the appropriate jQuery plugin
            $("#grid").dxDataGrid();
        });
        

- Create a [CustomStore](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources) object to get JSON data from the file added in the previous step.

        <!--JavaScript-->var customStore = new DevExpress.data.CustomStore({
            load: function (loadOptions) {
                var d = $.Deferred();
                $.getJSON('/Models/weatherData.js').done(function (data) {
                    d.resolve(data, {totalCount: data.length});
                });
                return d.promise();
            }
        });

    The **load** method is required for getting data. You can make a more complex request for filtered or sorted data taking the load options passed as a parameter into account. In the code above, these options are not used to simplify the example for this given task.

    [note] As you can see, a total count of items in the data source is specified. The grid will use this information to resolve paging and other features. 
    
- Define a configuration object for the DataSource object. 

        <!--JavaScript-->var gridDataSourceConfiguration = {
            store: customStore
        };

 Pass this configuration object to the grid's [dataSource](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource) option. This configuration object will be used to create the DataSource object. 

        <!--JavaScript-->
        $(function () {
            $("#grid").dxDataGrid({
                dataSource: gridDataSourceConfiguration
            });
        });
        
 [note]Do not create the Data Source object manually. It will be created by the grid internally. This is a **DataGrid** widget peculiarity. Other DevExtreme widgets can take on the manually created DataSource object. For details on grid data binding, refer to the [Data Binding](/Documentation/Guide/UI_Widgets/Data_Grid/Data_Binding/) article.

 At this step, you can run the project and confirm that the grid is displayed with all loaded data.

- Specify the columns that you need to be displayed in the grid.
 
        <!--JavaScript-->
        $(function () {
            $("#grid").dxDataGrid({
                dataSource: gridDataSourceConfiguration,
                columns:[
                    'month',
                    'recordLow',
                    'recordHigh'
                ]
            });
        });
        

- Sort grid data locally.  
    By default, sorting is enabled in the **DataGrid** widget. However, this feature will not work because the sorting options that are passed to the remote server to get sorted data are not processed. You can read details on this in the [Data Binding](/Documentation/Guide/UI_Widgets/Data_Grid/Data_Binding/#Data_Binding) | **Provide Data** | [Using a CustomStore](/Documentation/Guide/UI_Widgets/Data_Grid/Data_Binding/#Provide_Data/Using_the_Data_Layer/Using_a_CustomStore) topic. In this tutorial, data sorting can be performed locally. For this purpose, set the **sorting** field of the [remoteOperations](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/) configuration object to *false*.
 
        <!--JavaScript-->
        $(function () {
            $("#grid").dxDataGrid({
                dataSource: gridDataSourceConfiguration,
                columns:[
                    'month',
                    'recordLow',
                    'recordHigh'
                ],
                remoteOperations: {
                    sorting: false
                }
            });
        });

#####See Also#####
- [Configure DataGrid Tutorial](/Documentation/Tutorial/UI_Widgets/Configure_DataGrid/#Configure_DataGrid) - detailed information on how to configure the **DataGrid** widget

View the result below.

</article>