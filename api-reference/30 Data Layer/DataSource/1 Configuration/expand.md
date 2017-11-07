<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->Array<String> | String<!--/type-->
===========================================================================

<!--shortDescription-->
An array of the strings that represent the names of the navigation properties to be loaded simultaneously with the OData store's entity.
<!--/shortDescription-->

<!--fullDescription-->
This option is specific to the data sources that use a [data store](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores) of the [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/) type.

To learn more on this option, refer to the [Associations](/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData/Associations) topic.

In an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option in the `OData()` data source:

    <!--Razor C#-->
    @(Html.DevExtreme().WidgetName()
        .DataSource(ds => ds.OData()
            .Expand("PropertyName1", "PropertyName2")
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().WidgetName() _
        .DataSource(Function(ds)
            Return ds.OData() _
                     .Expand("PropertyName1", "PropertyName2")
        End Function)
    )

<!--/fullDescription-->