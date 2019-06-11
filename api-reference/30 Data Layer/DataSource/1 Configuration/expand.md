<!--id-->DataSource.Options.expand<!--/id-->
===========================================================================
<!--type-->Array<String> | String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the navigation properties to be loaded with the OData entity. Available only for the [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/).
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        store: {
            type: "odata",
            // ODataStore is configured here
        },
        expand: ["PropertyName1", "PropertyName2"]
    });

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    import ODataStore from "devextreme/data/odata/store";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                store: new ODataStore({
                    // ODataStore is configured here
                }),
                expand: ["PropertyName1", "PropertyName2"]
            });
        }
    }

##### ASP.NET MVC Controls

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
    
---

#####See Also#####
- [OData - Associations](/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData/Associations)
<!--/fullDescription-->