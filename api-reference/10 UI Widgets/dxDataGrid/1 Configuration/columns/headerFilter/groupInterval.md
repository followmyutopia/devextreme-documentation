<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->'year' | 'month' | 'day' | 'quarter' | 'hour' | 'minute' | 'second'<!--/acceptValues-->
<!--type-->string | number<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how header filter values should be combined into groups.
<!--/shortDescription-->

<!--fullDescription-->
[note]When the column data type is "date", groups are organized in a hierarchy, and the **groupInterval** option indicates up to which level the hierarchy is formed. By default, this level is "day". This means that each group has the following structure: "year"->"months"->"days". 

To configure a data selector for numeric data, assign a number to this option. The number assigned is the maximum length of each group. The bigger the number, the less the quantity of the generated groups.

The data selector for dates is configured by assigning a *string* to this option.

When configuring the widget using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), specify this option using the `HeaderFilterGroupInterval` enum. This enum accepts the following values: `Year`, `Quarter`, `Month`, `Day`, `Hour`, `Minute` and `Second`.
<!--/fullDescription-->