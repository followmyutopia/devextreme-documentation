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
Specifies the [attributes](http://www.w3schools.com/tags/ref_attributes.asp) to be attached to the widget's root element.
<!--/shortDescription-->

<!--fullDescription-->
When you configure this option in an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), pass a dictionary or an object with HTML attributes as shown in the following code.

    <!--Razor C#-->@(Html.DevExtreme().WidgetName()
        .ElementAttr(new Dictionary<string, object>() {
            { "id", "elementId" },
            { "class", "class-name" }
        })
        // ===== or =====
        .ElementAttr(new {
            @id = "elementId",
            @class = "class-name"
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().WidgetName() _
        .ElementAttr(New Dictionary(Of String, Object) From {
            { "id", "elementId" },
            { "class", "class-name" }
        })
        ' ===== or =====
        .ElementAttr(New With {
            .id = "elementId",
            .class = "class-name"
        })
    )
<!--/fullDescription-->