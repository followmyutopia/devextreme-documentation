<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->'string' | 'number' | 'date' | 'datetime' | 'boolean' | 'object'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Casts column values to a specific data type.
<!--/shortDescription-->

<!--fullDescription-->
If your data source stores non-string values (e.g. numbers) as strings, specify the proper data type using the **dataType** option.
 
Date-time values stored as strings should have one of the following formats: `"yyyy/MM/dd"`, `"yyyy/MM/dd HH:mm:ss"`, `"yyyy-MM-ddTHH:mm:ssx"` or `"yyyy-MM-ddTHH:mm:ss"`.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `GridColumnDataType` enum. This enum accepts the following values: `String`, `Number`, `Date`, `DateTime`, `Boolean` and `Object`.
<!--/fullDescription-->