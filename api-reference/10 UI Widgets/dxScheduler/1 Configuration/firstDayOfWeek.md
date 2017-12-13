===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->0 | 1 | 2 | 3 | 4 | 5 | 6<!--/acceptValues-->
<!--type-->Number<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the first day of a week. Does not apply to the [agenda view](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Agenda_View). 
<!--/shortDescription-->

<!--fullDescription-->
This option can accept a value from 0 to 6:

- 0 - Sunday
- 1 - Monday
- 2 - Tuesday
- 3 - Wednesday
- 4 - Thursday
- 5 - Friday
- 6 - Saturday

The value provided by the culture settings is used by default.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `FirstDayOfWeek` enum. This enum accepts the following values: `Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday` and `Saturday`.
<!--/fullDescription-->
