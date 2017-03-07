Also, DevExtreme ASP.NET MVC Wrappers operate with an [OData](http://www.odata.org/) service out of the box. To address an OData service, call the `DataSource()` method and pass a lambda expression to it. The lambda parameter exposes the `OData()` method that configures access to the OData service.

    @(Html.DevExtreme().DataGrid()
        .DataSource(ds => ds
            .OData()
            .Version(4)
            .Url("http://services.odata.org/V4/Northwind/Northwind.svc/Products")
            .JSONP(true)
            .Key("ProductID")
            .Expand("Category")
        )
    )

For an example of a widget getting data from an OData service, refer to our [sample application](/Documentation/Guide/ASP.NET_MVC_Wrappers/Overview/#Sample_Application).