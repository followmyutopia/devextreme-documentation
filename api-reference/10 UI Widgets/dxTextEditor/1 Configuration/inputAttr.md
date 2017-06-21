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
You can configure this option in an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/) as follows:

    <!--Razor C#-->@(Html.DevExtreme().WidgetName()
        .InputAttr("id", "inputId")
        // ===== or =====
        .InputAttr(new {
            @id = "inputId"
        })
        // ===== or =====
        .InputAttr(new Dictionary<string, object>() {
            { "id", "inputId" }
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().WidgetName() _
        .InputAttr("id", "inputId")
        ' ===== or =====
        .InputAttr(New With {
            .id = "inputId"
        })
        ' ===== or =====
        .InputAttr(New Dictionary(Of String, Object) From {
            { "id", "inputId" }
        })
    )
<!--/fullDescription-->