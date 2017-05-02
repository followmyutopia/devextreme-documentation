<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_data_odata_store">data/odata/store</a><!--/module-->
<!--export-->default<!--/export-->
<!--type-->object<!--/type-->
<!--inherits-->..\Store\Store.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
A [Store](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores) providing access to a separate [OData](http://www.odata.org) web service entity.
<!--/shortDescription-->

<!--fullDescription-->
To access the entire OData service, use the [ODataContext](/Documentation/ApiReference/Data_Layer/ODataContext/) object.

If you need to create a separate **ODataStore** instance, call the `ODataStore` constructor and specify the URL of the required entity via the [url](/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#url) configuration option.

    <!--JavaScript-->
    var store = new DevExpress.data.ODataStore({
        url: "/url/to/service",
        key: "CategoryID",
        keyType: "Int32"
    });

Note that the [key](/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#key) and [keyType](/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#keyType) configuration options provide read-write access to the entity.

#####See Also#####
- [DataSource Examples - OData](/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData)

When using a widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), declare the **ODataStore** using the syntax shown in the following example. This example configures the [DataGrid](/Documentation/ApiReference/UI_Widgets/dxDataGrid/) widget.

    <!--Razor C#-->@(Html.DevExtreme().DataGrid()
        .ID("dataGrid")
        .DataSource(ds => ds.OData()
            .Version(4)
            .Url("http://services.odata.org/V4/Northwind/Northwind.svc/Products")
            .JSONP(true)
            .Key("ProductID")
            .Expand("Category")
        )
    )

    <!--Razor VB-->@(Html.DevExtreme().DataGrid() _
        .ID("dataGrid") _
        .DataSource(Function(ds)
            Return ds.OData() _
                     .Version(4) _
                     .Url("http://services.odata.org/V4/Northwind/Northwind.svc/Products") _
                     .JSONP(True) _
                     .Key("ProductID") _
                     .Expand("Category")
        End Function)
    )

#####See Also#####
- [ASP.NET MVC Controls - Data Binding](/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/)
<!--/fullDescription-->