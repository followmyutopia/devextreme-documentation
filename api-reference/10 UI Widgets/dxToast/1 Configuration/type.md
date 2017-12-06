===========================================================================
<!--default-->'info'<!--/default-->
<!--acceptValues-->'info' | 'warning' | 'error' | 'success' | 'custom'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the **Toast** widget type.
<!--/shortDescription-->

<!--fullDescription-->
The available toast types (except for "custom") only differ by the icon and background color.

If you assign "custom" to the **type** option, the `dx-toast-custom` class is applied to the widget element. Implement the appropriate CSS class to specify toast appearance.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `ToastType` enum. This enum accepts the following values: `Info`, `Warning`, `Error`, `Success` and `Custom`.
<!--/fullDescription-->