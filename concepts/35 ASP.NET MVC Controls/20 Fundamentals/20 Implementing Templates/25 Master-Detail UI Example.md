A common use case of templates is the detail section of the [master-detail UI](/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/) in the [DataGrid](/Documentation/ApiReference/UI_Widgets/dxDataGrid/) control. Consider the following code, in which the detail section nests another **DataGrid** whose controller gets the `data.OrderID` free variable as a loading parameter.
    
    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        .DataSource(d => d.WebApi().Controller("DataGridMasterDetailView").Key("ID"))
        .Columns(columns => {
            columns.Add().DataField("FirstName");
            columns.Add().DataField("LastName");
            // ...
        })
        // Configures the master-detail UI
        .MasterDetail(md => md
            .Enabled(true)
            // Specifies the contents of the detail section
            .Template(@<text>
                @(Html.DevExtreme().DataGrid()
                    .DataSource(d => d.WebApi()
                        .Controller("DataGridMasterDetailView")
                        .LoadAction("TasksDetails")
                        // Passes "ID" as a parameter to "DataGridMasterDetailViewController"
                        .LoadParams(new { id = new JS("data.ID") })
                    )
                )
            </text>)
        )
    )

    <!--Razor VB-->
    @Code
        Html.DevExtreme().DataGrid() _
            .DataSource(Function(d) d.WebApi().Controller("DataGridMasterDetailView").Key("ID")) _
            .Columns(Sub(columns)
                columns.Add().DataField("FirstName")
                columns.Add().DataField("LastName")
                ' ...
            End Sub) _
            .MasterDetail(Sub(md)
                ' Configures the master-detail UI
                md.Enabled(True) _
                .Template(Sub()
                        @<text>
                            @(Html.DevExtreme().DataGrid() _
                                .DataSource(Function(d)
                                    Return d.WebApi() _
                                            .Controller("DataGridMasterDetailView") _
                                            .LoadAction("TasksDetails") _
                                            .LoadParams(New With { .id = New JS("data.ID") }) ' Passes "ID" as a parameter
                                                                                            ' to "DataGridMasterDetailViewController"
                                End Function)
                            )
                        </text>
                End Sub)
            End Sub)
    End Code

Note that the `data.ID` free variable is wrapped in the `new JS()` construction. This construction allows you to embed JavaScript statements in the resulting control configuration. In particular, the data source configuration of the nested **DataGrid** from the preceding code yields the following output.

    "dataSource": {
        "store": DevExpress.data.AspNet.createStore({
            "loadParams": {
                "orderID": data.ID
            },
            "loadUrl": "/api/DataGridMasterDetailView/TasksDetails",
            "insertUrl": "/api/DataGridMasterDetailView/Post",
            "updateUrl": "/api/DataGridMasterDetailView/Put",
            "deleteUrl": "/api/DataGridMasterDetailView/Delete"
        })
    }

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/MasterDetailView/Mvc/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

You can find more examples of templates in our [technical demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/WebApi/Mvc/Light/) and [sample applications](/Documentation/Guide/ASP.NET_MVC_Controls/Prerequisites_and_Installation/#Sample_Applications).