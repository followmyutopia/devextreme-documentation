<!--id-->dxRangeSelector.Options.background.image.location<!--/id-->
===========================================================================
<!--default-->'full'<!--/default-->
<!--acceptValues-->'center' | 'centerBottom' | 'centerTop' | 'full' | 'leftBottom' | 'leftCenter' | 'leftTop' | 'rightBottom' | 'rightCenter' | 'rightTop'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a location for the image in the background of a range selector.
<!--/shortDescription-->

<!--fullDescription-->
If the image does not occupy the entire background area, you can set the required background color to be displayed in the remaining area. Use the **color** property of the **background** configuration object to do this.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `BackgroundImageLocation` enum. This enum accepts the same values, but they start with an upper-case letter, for example, *'leftTop'* becomes `LeftTop`.
<!--/fullDescription-->