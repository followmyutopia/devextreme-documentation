===========================================================================
<!--type-->Array<String> | String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the navigation properties that are loaded with the OData entity. Available only for the [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/).
<!--/shortDescription-->

<!--fullDescription-->
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

#####See Also#####
- [Associations](/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData/Associations)
<!--/fullDescription-->