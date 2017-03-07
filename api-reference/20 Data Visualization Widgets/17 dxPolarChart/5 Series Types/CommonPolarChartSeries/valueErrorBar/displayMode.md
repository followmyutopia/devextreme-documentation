<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'auto'<!--/default-->
<!--acceptValues-->'auto' | 'low' | 'high' | 'none'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether error bars must be displayed in full or partially.
<!--/shortDescription-->

<!--fullDescription-->
Usually, when displaying error bars, you need both the lower and higher parts of them to indicate the error. This case corresponds to the **displayMode** option equaling *'auto'*. If you need to display the lower or higher parts separately, set this option to *'low'* or *'high'* respectively. To hide error bars, assign *'none'* to this option.

When configuring the widget using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), specify this option using the `ValueErrorBarDisplayMode` enum. This enum accepts the following values: `Auto`, `Low`, `High` and `None`.
<!--/fullDescription-->