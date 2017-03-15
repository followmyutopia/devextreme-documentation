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
When you configure this option using a [server-side wrapper](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), pass a dictionary as shown in the following code.

    <!--Razor C#-->@(Html.DevExtreme()
        // other widget options
        // ...
        .ElementAttr(new Dictionary<string, object>() {
            { "id", "elementId" },
            { "class", "class-name" },
            // ...
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().WidgetName() _
        .ElementAttr(New Dictionary(Of String, Object) From {
            { "id", "elementId" },
            { "class", "class-name" }
        })
    )
<!--/fullDescription-->