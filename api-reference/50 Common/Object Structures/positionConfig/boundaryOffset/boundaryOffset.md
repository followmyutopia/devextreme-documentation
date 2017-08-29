<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->String | Object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the horizontal and vertical offset from the window's boundaries.
<!--/shortDescription-->

<!--fullDescription-->
This option is used to resolve collisions. If the specified [offset](/Documentation/ApiReference/Common/Object_Structures/positionConfig/offset/) from the specified [target](/Documentation/ApiReference/Common/Object_Structures/positionConfig/#of) leads to a collision with the window's boundary, the **boundaryOffset** value is used to position the element near the place of collision.

This option accepts an object containing the **x** and **y** fields which specify horizontal and vertical offset respectively, or a string in the following format: "5 -10", where the first number is a horizontal offset and the second number is a vertical offset in pixels.

When you configure a widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), this option accepts two values of the `double` type.

    <!--Razor C#-->
    @(Html.DevExtreme().WidgetName()
        .Position(p => p
            .BoundaryOffset(5, -10)
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().WidgetName() _
        .Position(Sub(p)
            p.BoundaryOffset(5, -10)
        End Sub)
    )
<!--/fullDescription-->