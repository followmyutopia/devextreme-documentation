===========================================================================
<!--module-->data/data_source<!--/module-->
<!--export-->default<!--/export-->
<!--type-->Object<!--/type-->
<!--inherits-->..\..\10 UI Widgets\EventsMixin\EventsMixin.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
An object that provides access to a data web service or local data storage for collection container widgets.
<!--/shortDescription-->

<!--fullDescription-->
A **DataSource** object is the connection between a collection container widget and the data provided by a web service or data stored locally. To [create a DataSource instance](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource), call its constructor and pass the [configuration object](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/) to it.

    <!--JavaScript-->var myDataSource = new DevExpress.data.DataSource(dataSourceConfig);

To associate a **DataSource** instance with a widget, pass this instance to the dataSource option of the widget.

    <!--HTML--><div data-bind="dxList: { dataSource: myDataSource }"></div>

You can also pass the **DataSource** configuration object to the dataSource option. In this case, the **DataSource** instance will be automatically created within the widget.

    <!--HTML--><div data-bind="dxList: { dataSource: dataSourceConfig }"></div>

[note] If you create a **DataSource** instance outside the widget, be sure to [dispose](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#dispose) of it when it is no longer used. If the **DataSource** is created within the widget, it will be disposed of automatically.

Refer to the [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/) and [Data Source Examples](/Documentation/Guide/Data_Layer/Data_Source_Examples/) topics for more information about working with data in DevExtreme.

When using a widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), declare the options of the **DataSource** in the `DataSourceOptions()` method.

    <!--Razor C#-->@(Html.DevExtreme().DataGrid()
        .ID("dataGrid")
        .DataSource(d => d
            // ...
            // Data access is configured here
        )
        .DataSourceOptions(o => o
            .Filter("['ProductID', '>', 10]")
            .Sort("LastName", false)
        )
    )

    <!--Razor VB-->@(Html.DevExtreme().DataGrid() _
        .ID("dataGrid") _
        .DataSource(Function(d)
            Return d.
                @* Data access is configured here *@
        End Function) _
        .DataSourceOptions(Sub(o)
            o.Filter("['ProductID', '>', 10]") _
             .Sort("LastName", False)
        End Sub)
    )


For information on how to configure data access in ASP.NET MVC Controls, see the [Data Binding](/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/) topic.
<!--/fullDescription-->