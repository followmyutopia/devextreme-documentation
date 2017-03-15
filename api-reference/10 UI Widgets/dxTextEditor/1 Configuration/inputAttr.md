<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->{}<!--/default-->
<!--type-->object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the attributes to be passed on to the underlying HTML element.
<!--/shortDescription-->

<!--fullDescription-->
When you configure this option using a [server-side wrapper](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), pass a dictionary as shown in the following code.

    <!--Razor C#-->@(Html.DevExtreme()
        // other widget options
        // ...
        .InputAttr(new Dictionary<string, object>() {
            { "id", "inputId" },
            // ...
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().WidgetName() _
        .InputAttr(New Dictionary(Of String, Object) From {
            { "id", "inputId" }
        })
    )
<!--/fullDescription-->