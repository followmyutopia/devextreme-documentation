With the **DataGrid** widget, you can calculate [summaries](/Documentation/Guide/UI_Widgets/Data_Grid/Summaries/) server side. This can make grid work faster with large amount of data. To enable the remote summaries, you must create server-side implementation of a summaries calculation algorithm, configure the Custom Store according to the server's data access protocol and enable [summary](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#summary) remote operation. 

When [remote summary](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#summary) is enabled, the [loadOptions](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) object has additional fields &#8212; **totalSummary** (the summary, calculated for the entire dataset) and **groupSummary** (the summary, calculated for each group when [grouping](/Documentation/Guide/UI_Widgets/Data_Grid/Grouping/) is enabled). The structure of these objects is like the following.

    <!--JavaScript-->[{ selector: "column1", summaryType: "sum" }, 
     { selector: "column2", summaryType: "min" },
     // ...
     { summaryType: "count" }]

The result should be placed to a **summary** field as shown below.

    <!--JavaScript-->var gridDataSource = {
        load: function (loadOptions) {
            var d = $.Deferred();
            $.getJSON('http://mydomain.com/MyDataService', { 
                totalSummary: loadOptions.totalSummary,
                // ...
            }).done(function(result) {
                d.resolve(result.data, {
                    // ...
                    summary: result.summaries
                });
            }).fail(d.reject);
            return d.promise();
        }
    }

The server should check the **totalSummary** value and return the object of the following structure (the *result* variable).

    <!--JavaScript-->{
        //...
        summaries: [/* array of summary results */]
    }

When using the group summary, the server checks the **groupSummary** value and returns the **data** object supplemented with summary values as shown below.

    <!--JavaScript-->{
        //...
        data: [{
            key: "Category 1", items: null, count: 100, summary: [30, 20]
        }, {
            key: "Category 2", items: null, count: 200, summary: [100, 50]
        }, ...]
    }

For details on remote grouping, refer to the [Remote Grouping](/Documentation/Guide/UI_Widgets/Data_Grid/Use_Custom_Store/#Remote_Operations/Advanced_Remote_Operations/Remote_Grouping) section.

[note] When the remote summaries are enabled, the widget does not support [custom summary calculation](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/#calculateCustomSummary).