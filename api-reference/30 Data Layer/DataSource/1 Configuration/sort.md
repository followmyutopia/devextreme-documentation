===========================================================================
<!--type-->Sort expression<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies data sorting options.
<!--/shortDescription-->

<!--fullDescription-->
In an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option as follows:

    <!--Razor C#-->
    @(Html.DevExtreme().WidgetName()
        .DataSourceOptions(dso => dso
            .Sort("Discount", false) // for sorting by a single field
            // === or ===
            .Sort(s => {             // for sorting by multiple fields
                s.AddSorting("LastName");
                s.AddSorting("Discount", false);
            })
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().WidgetName() _
        .DataSourceOptions(Sub(dso)
            dso.Sort("Discount", False) ' for sorting by a single field
            ' === or ===
            dso.Sort(Sub(s)             ' for sorting by multiple fields
                s.AddSorting("LastName")
                s.AddSorting("Discount", False)
            End Sub)
        End Sub)
    )

#####See Also#####
- [Sorting](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Sorting)
<!--/fullDescription-->
