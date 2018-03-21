===========================================================================
<!--default-->'onScroll'<!--/default-->
<!--acceptValues-->'always' | 'never' | 'onHover' | 'onScroll'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies when to show scrollbars. Applies only if [useNative]({basewidgetpath}/Configuration/scrolling/#useNative) is **false**.
<!--/shortDescription-->

<!--fullDescription-->
The scrollbars help to scroll the content vertically and horizontally. Vertical scrolling is available when all the rows do not fit in the widget's height. Horizontal scrolling is available when all the columns do not fit in the widget's width, which can happen when columns have [fixed widths]({basewidgetpath}/Configuration/#width) or the [columnAutoWidth]({basewidgetpath}/Configuration/#columnAutoWidth) option is set to **true**.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `ShowScrollbarMode` enum. This enum accepts the following values: `OnScroll`, `OnHover`, `Always` and `Never`.
<!--/fullDescription-->
