<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies configuration options for the editor widget of the current form item.
<!--/shortDescription-->

<!--fullDescription-->
When using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), configure the editor in the following manner.

    @(Html.DevExtreme().Form()
        .FormData(Model.Data)
        .Items(items => {
            items.AddSimple().DataField("EmployeeID")
                .Editor(e => e.TextBox() // or any other supported editor
                    .Placeholder("Type a text here...")
                    // ...
                    // other editor options go here
                )
        })
    )
<!--/fullDescription-->