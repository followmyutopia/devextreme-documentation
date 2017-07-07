Remote group paging helps to speed up grouping when there is a significant amount of data. Compared to grouping without paging, significantly less data is transmitted, because the **DataGrid** loads groups for the current page only. As a downside, requests become more frequent, because the **DataGrid** sends several of them each time a user expands a group or sorts/filters data.

Remote group paging has restrictions:

- Filtering, paging, grouping, and sorting should be performed remotely.
- Initially, all groups should be collapsed by setting the **grouping** | [autoExpandAll](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#autoExpandAll) option to *false*.
- Do not call the [expandAll(groupIndex)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#expandAllgroupIndex) method. Otherwise, the widget ignores remote group paging.

Set the **remoteOperations** | [groupPaging](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#groupPaging) option to *true* to enable remote group paging. Note that with this setting, all other data processing operations (filtering, sorting, grouping, paging and summary calculation) also become remote. 

    <!--JavaScript-->
    $(function() {
        $("#gridContainer").dxDataGrid({
            //...
            remoteOperations: {
                groupPaging: true
            }
        });
    });

Now, the **DataGrid** requires server-implemented group paging. Use the following extensions for ASP.NET and PHP servers to implement group paging and other data processing operations:

- [DevExtreme ASP.NET Data](https://github.com/DevExpress/DevExtreme.AspNet.Data)
- [DevExtreme PHP Data](https://github.com/DevExpress/DevExtreme-PHP-Data)

#####See Also#####
- [DataGrid and Web API Example](https://github.com/DevExpress/devextreme-examples/tree/17_1/datagrid-webapi)

For servers built on other technologies, implement all data processing operations by yourself and configure data access on the client side using the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) as shown in the [Custom Sources - Load Data](/Documentation/Guide/Widgets/DataGrid/Data_Binding/Custom_Sources/#Load_Data) topic, but mind the following changes in the result object's structure:

    {
        data: [{
            key: "Group 1",
            count: 3,
            items: null,
            summary: [30, 20, 40]
        },
        ...
        ], 
        totalCount: 200,
        groupCount: 35, // added; count of top-level groups, if required in requireGroupCount
        summary: [170, 20, 20, 1020]
    }

The **groupCount** should be returned only if the **requireGroupCount** Boolean parameter in the **loadOptions** is *true*. The following code is amended to query data from a server that supports remote group paging:

    <!--JavaScript-->
    var gridDataSource = new DevExpress.data.DataSource({
        load: function (loadOptions) {
            var d = $.Deferred();
            $.getJSON('http://mydomain.com/MyDataService', {
                skip: loadOptions.skip,
                take: loadOptions.take,
                sort: loadOptions.sort,
                filter: loadOptions.filter,
                requireTotalCount: loadOptions.requireTotalCount,
                totalSummary: loadOptions.totalSummary,
                group: loadOptions.group,
                groupSummary: loadOptions.groupSummary,
                requireGroupCount: loadOptions.requireGroupCount // added
            }).done(function (result) {
                    d.resolve(result.data, { 
                        totalCount: result.totalCount,
                        summary: result.summary,
                        groupCount: result.groupCount // added
                    });
                });
            return d.promise();
        }
    });

    $(function() {
        $("#dataGridContainer").dxDataGrid({
            dataSource: gridDataSource,
            // ...
        });
    });
