===========================================================================
<!--type-->Filter expression<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies data filtering conditions.
<!--/shortDescription-->

<!--fullDescription-->
Possible variants:

* Binary filter

        [ "field", "=", 3 ]

* Unary filter

        [ "!", [ "field", "=", 3 ] ]

* Complex filter

        [
            [ "field", "=", 10 ],
            "and",
            [
                [ "otherField", "<", 3 ],
                "or",
                [ "otherField", ">", 11 ]
            ]
        ]

---
##### jQuery

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // ...
        filter: [ "count", "<", "10" ]
    });

##### Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        ds: DataSource;
        constructor() {
            this.ds = new DataSource({
                // ...
                filter: [ "count", "<", "10" ]
            });
        }
    }

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().WidgetName()
        .DataSourceOptions(dso => dso
            .Filter("[ 'count', '<', '10' ]")
        )
    )

---

[note] Filtering works when inputting a plain data structure only. However, if you need the filtering capability and hierarchical data, transform the plain data using the **DataSource**'s [group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) option.

#####See Also#####
- [Filtering](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering)
<!--/fullDescription-->