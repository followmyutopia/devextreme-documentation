===========================================================================
<!--default-->{ name: 'onClick', delay: { show: 50, hide: 300 } }<!--/default-->
<!--acceptValues-->'onHover' | 'onClick'<!--/acceptValues-->
<!--type-->Object | String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies options for showing and hiding the first level submenu.
<!--/shortDescription-->

<!--fullDescription-->
If you assign a string that specifies the mode name to this option, the widget will use the default delay value.

    <!--JavaScript-->
    showFirstSubmenuMode: "onHover"

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), you can specify this option using the `ShowSubmenuMode` enum. This enum accepts the following values: `OnHover` and `OnClick`.
<!--/fullDescription-->