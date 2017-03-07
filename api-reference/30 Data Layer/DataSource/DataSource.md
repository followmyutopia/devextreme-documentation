<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--module--><a href="/Documentation/16_2/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_data_data_source">data/data_source</a><!--/module-->
<!--export-->default<!--/export-->
<!--type-->object<!--/type-->
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

Refer to the [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/), [Data Source Examples](/Documentation/Guide/Data_Layer/Data_Source_Examples/), and [Data-Bound Application](/Documentation/Tutorial/#Bind_to_Real_Data) topics for more information about working with data in DevExtreme.

When configuring a widget using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), declare the options of the **DataSource** in the `DataSourceOptions()` method.

    @(Html.DevExtreme().DataGrid()
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

For information on how to configure data access using ASP.NET MVC Wrappers, see the [Data Binding](/Documentation/Guide/ASP.NET_MVC_Wrappers/Data_Binding/) topic.
<!--/fullDescription-->