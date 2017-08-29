<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--dep-->..\tickInterval\tickInterval.md<!--/dep-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year'<!--/acceptValues-->
<!--type-->Number | Object | String<!--/type-->
===========================================================================

<!--deprecated-->
Use the **tickInterval** option instead.
<!--/deprecated-->

<!--shortDescription-->
Specifies an interval between major ticks.
<!--/shortDescription-->

<!--fullDescription-->
Use this property to divide the scale by major ticks in a specified interval. If this property is not set, major ticks are arranged automatically.

In the case of a numeric scale, assign a numeric value to this property. If the scale is of the date-time type, assign one of the predefined string values. To set an interval to several days, hours, etc., assign an object with the corresponding field specified (**days**, **hours** or another field). Note that this object should contain only one of the fields described in this section.

[note]Setting a major tick interval is unavailable for a discrete scale.
<!--/fullDescription-->