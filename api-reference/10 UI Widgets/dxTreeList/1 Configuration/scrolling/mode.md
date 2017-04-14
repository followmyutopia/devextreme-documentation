<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'virtual'<!--/default-->
<!--acceptValues-->'standard' | 'virtual'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the scrolling mode.
<!--/shortDescription-->

<!--fullDescription-->
The following scrolling modes are available in the widget:

- **Standard**      
All rows are loaded at once. Scrolling appears only if the widget height cannot fit all rows.

- **Virtual**       
Rows are loaded when they get into the viewport and removed once they leave it. Use this mode if a user should be able to scroll data jumping from one row to another.

When configuring the widget using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), specify this option using the `TreeListScrollingMode` enum. This enum accepts the following values: `Standard` and `Virtual`.
<!--/fullDescription-->
