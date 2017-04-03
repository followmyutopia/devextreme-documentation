<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'hide'<!--/default-->
<!--acceptValues-->'hide' | 'none'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Decides how to arrange axis labels when there is not enough space to keep all of them.
<!--/shortDescription-->

<!--fullDescription-->
When axis labels overlap each other, you can rearrange them by setting the **overlappingBehavior** option. It accepts the following values.

- **hide**      
Hides certain axis labels leaving more space for the others.
- **none**      
Leaves axis labels overlapped.

When configuring the widget using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), specify this option using the `PolarChartOverlappingBehavior` enum. This enum accepts the following values: `Hide` and `None`.

[note] Specifying this option with the *"enlargeTickInterval"* and *"ignore"* values is <span style="color:red">deprecated</span>.
<!--/fullDescription-->