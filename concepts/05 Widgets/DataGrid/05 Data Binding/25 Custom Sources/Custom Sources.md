The **DataGrid** uses the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) to receive data from a custom source. This article provides details on how to configure it and the protocol that the **CustomStore** adheres to when communicating with the server. If the server already processes data, that is, performs [filtering](/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/), [sorting](/Documentation/Guide/Widgets/DataGrid/Sorting/), [paging](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/), [grouping](/Documentation/Guide/Widgets/DataGrid/Grouping/) or [summary calculation](/Documentation/Guide/Widgets/DataGrid/Summaries/), notify the **DataGrid** by assigning **true** to the corresponding [remoteOperations](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/) object field. 

---

#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#gridContainer").dxDataGrid({ 
            // ...
            remoteOperations: {
                filtering: true,
                sorting: true,
                paging: true,
                grouping: true,
                summary: true
            }
            // or simply
            // remoteOperations: true
        });
    }); 

#####Angular

    <!--HTML--><dx-data-grid ... >
        <dxo-remote-operations
            [filtering]="true"
            [sorting]="true"
            [grouping]="true"
            [paging]="true"
            [summary]="true"> 
        </dxo-remote-operations>
        <!-- or simply -->
        <!-- [remoteOperations]="true" -->
    </dx-data-grid>

---

[note]Use server-side filtering if your server returns hierarchical (grouped) data because client-side filtering requires inputting plain data.

If the server does not process data yet, employ one of the following DevExtreme extensions. They implement server-side data processing and also configure the **CustomStore**. Remember to notify the **DataGrid** of the data processing operations that were delegated to the server.

- [DevExtreme ASP.NET Data](https://github.com/DevExpress/DevExtreme.AspNet.Data)
- [DevExtreme PHP Data](https://github.com/DevExpress/DevExtreme-PHP-Data)

If these extensions do not suit your needs, configure the **CustomStore** and implement server-side data processing by following the instructions in this article. Note that the server may leave some of the data processing operations unimplemented. In this case, make sure that the corresponding **remoteOperations** object fields are set to **false**.

#####See Also#####
- [DataGrid and Web API Example](https://github.com/DevExpress/devextreme-examples/tree/17_1/datagrid-webapi)
- [DataGrid and ASP.NET Core MVC Example](https://github.com/DevExpress/DevExtreme.AspNet.Data/tree/master/net)
- [DataGrid and PHP Example](https://github.com/DevExpress/DevExtreme-PHP-Data/tree/master/example)

[tags]dataGrid, data grid, CustomStore, DataSource, remote operations. remoteOperations, filtering, sorting, grouping, load data, add, delete, update
