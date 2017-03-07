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

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/OdataService/Mvc/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>