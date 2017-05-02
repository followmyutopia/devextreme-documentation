<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->object | string | array<!--/type-->
<!--inherits-->..\..\..\MapLocation\MapLocation.md<!--/inherits-->
===========================================================================

<!--shortDescription-->
An object, a string, or an array specifying the location displayed at the center of the widget.
<!--/shortDescription-->

<!--fullDescription-->
You can specify the **center** value in one of the following formats.

 - { lat: 40.749825, lng: -73.987963}
 - "40.749825, -73.987963"
 - [40.749825, -73.987963]
 - 'Brooklyn Bridge,New York,NY'

When you use the **Map** as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), this option accepts either a string value indicating the address, or two values of the `double` type indicating the coordinates.

    <!--Razor C#-->@(Html.DevExtreme().Map()
        .Center("Brooklyn Bridge,New York,NY")
        // ===== or =====
        .Center(40.74982, -73.987963)
    )

    <!--Razor VB-->@(Html.DevExtreme().Map() _
        .Center("Brooklyn Bridge,New York,NY") _
        ' ===== or =====
        .Center(40.74982, -73.987963)
    )
<!--/fullDescription-->