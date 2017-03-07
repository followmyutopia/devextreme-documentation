﻿[Custom Store](/Documentation/Guide/UI_Widgets/Data_Grid/Data_Binding/#Provide_Data/Using_the_Data_Layer/Using_a_CustomStore) is a [Store](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores) that allows you to connect a widget to a web service with its own data accessing logic. This article describes the peculiarities of a custom store implementation related to working with the **DataGrid** widget.

To use a CustomStore in **DataGrid** for fetching data, implement the [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) function specifying how data must be loaded from your web service. The following code snippet shows how to do this.

By default, the data grid assumes your data service supports the following remote operations: [filtering](/Documentation/Guide/UI_Widgets/Data_Grid/Filtering/), [sorting](/Documentation/Guide/UI_Widgets/Data_Grid/Sorting/) and [paging](/Documentation/Guide/UI_Widgets/Data_Grid/Data_Navigation/#Pager_Navigation). If your data service supports them, obtain grid data transformation settings from the object passed to the **load** function. Create the Deferred object, then get data from your web service. In this example, the **getJSON** function is used for this purpose. Note that data transformation settings can be passed to your web service as well. After data has been obtained successfully, resolve the Deferred object with received data and an additional object. In this additional object, set the **totalCount** field to the number of received records. This is needed to support paging in **DataGrid**.

    <!--JavaScript-->var gridDataSource = {
        load: function (loadOptions) {
            var filterOptions = loadOptions.filter ? JSON.stringify(loadOptions.filter) : "";   // Getting filter settings
            var sortOptions = loadOptions.sort ? JSON.stringify(loadOptions.sort) : "";  // Getting sort settings
            var requireTotalCount = loadOptions.requireTotalCount; // You can check this parameter on the server side  
                                                                   // to ensure that a number of records (totalCount) is required
            var skip = loadOptions.skip; // A number of records that should be skipped 
            var take = loadOptions.take; // A number of records that should be taken
            var d = $.Deferred();
            $.getJSON('http://mydomain.com/MyDataService', {  
                filter: filterOptions,
                sort: sortOptions,
                requireTotalCount: requireTotalCount,
                skip: skip,
                take: take
            }).done(function (result) {
                // Data processing here
                d.resolve(result.data, { totalCount: result.totalCount }); 
            });
            return d.promise();
        }
    }

You may have noticed that in this code, the total number of grid records is obtained along with data using the **getJSON** request within the **load** function. If you use [remote paging](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#paging), you can send an individual request to get this number by specifying the [totalCount](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#totalCount) function. You can also check the [loadOptions](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) | **requireTotalCount** option value server side to find out whether you are required to count and return the total number of records. Use the following code in addition to the code above to get the **totalCount** value using a separate request.

    <!--JavaScript-->var gridDataSource = {
        load: function (loadOptions) {
            ...
            $.getJSON(...).done(function (data) {
                ...
                d.resolve(data); 
            });
            return d.promise();
        },
        totalCount: function(loadOptions) {
            var d = new $.Deferred();
            var filterOptions = loadOptions.filter ? JSON.stringify(loadOptions.filter) : "";  // Getting filter settings
            $.getJSON('http://mydomain.com/MyDataService', {
                filter: filterOptions
            }).done(function (totalCount) {
                ...
                d.resolve(totalCount);
            });
            return d.promise();
        }
    };

[note] To learn how to handle CRUD operations, refer to the [Data Binding](/Documentation/Guide/UI_Widgets/Data_Grid/Data_Binding/#Provide_Data/Using_the_Data_Layer/Using_a_CustomStore) article.

Refer to the [DataGrid - How to implement a custom store with CRUD operations](https://www.devexpress.com/Support/Center/Example/Details/T137724) example for more information on implementing a CustomStore.