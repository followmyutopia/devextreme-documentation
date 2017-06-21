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
When you configure this option in [ASP.NET MVC Controls](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), pass a dictionary or an object with HTML attributes as shown in the following code.

    <!--Razor C#-->@(Html.DevExtreme().WidgetName()
        .InputAttr(new Dictionary<string, object>() {
            { "id", "inputId" }
        })
        // ===== or =====
        .InputAttr(new {
            @id = "inputId"
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().WidgetName() _
        .InputAttr(New Dictionary(Of String, Object) From {
            { "id", "inputId" }
        })
        ' ===== or =====
        .InputAttr(New With {
            .id = "inputId"
        })
    )
<!--/fullDescription-->