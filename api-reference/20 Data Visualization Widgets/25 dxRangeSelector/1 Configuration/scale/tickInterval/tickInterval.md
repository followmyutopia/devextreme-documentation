<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year'<!--/acceptValues-->
<!--type-->number | object | string<!--/type-->
<!--inherits-->..\..\..\..\VizTimeInterval\VizTimeInterval.md<!--/inherits-->
===========================================================================

<!--shortDescription-->
Specifies an interval between axis ticks.
<!--/shortDescription-->

<!--fullDescription-->
In the case of a numeric scale, assign a numeric value to this property. If the scale is of the date-time type, assign one of the predefined string values. To set an interval to several days, hours, etc., assign an object with the corresponding field specified (**days**, **hours** or another field). Note that this object should contain only one of the fields described in this section.

[note]Setting a major tick interval is unavailable for a discrete scale.

When configuring the widget using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), specify this option using the `VizTimeInterval` enum. This enum accepts the same values, but they start with an upper-case letter, for example, *'day'* becomes `Day`.
<!--/fullDescription-->