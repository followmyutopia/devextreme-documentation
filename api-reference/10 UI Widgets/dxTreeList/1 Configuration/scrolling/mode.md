===========================================================================
<!--default-->'virtual'<!--/default-->
<!--acceptValues-->'standard' | 'virtual'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the scrolling mode.
<!--/shortDescription-->

<!--fullDescription-->
The following scrolling modes are available in the widget:

- **Standard**      
Rows are rendered at once or by pages if [paging](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/paging/) is enabled. Scrolling appears only if all the rows cannot fit into the widget's height.

- **Virtual**       
This mode is an alternative to paging where pages are rendered when they get into the viewport and removed once they leave it. Use this mode if a user should be able to scroll data by pages.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `TreeListScrollingMode` enum. This enum accepts the following values: `Standard` and `Virtual`.
<!--/fullDescription-->