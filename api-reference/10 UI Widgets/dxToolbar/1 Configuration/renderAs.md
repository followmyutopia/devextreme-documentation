<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'topToolbar'<!--/default-->
<!--acceptValues-->'topToolbar' | 'bottomToolbar'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Informs the widget about its location in a view HTML markup.
<!--/shortDescription-->

<!--fullDescription-->
When configuring the **Toolbar** widget, use the **renderAs** option to specify the location of this widget in a view HTML template. Depending on the value that you set for this option, the widget's appearance will be adjusted accordingly. For instance, when a toolbar is located at the top of a view on an iOS device, it must be separated by a border from the bottom view content. In addition, when a toolbar is located at the bottom of a view on a Windows Phone 8 device, this toolbar looks and behaves like a native [application bar](http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff431813(v=vs.105).aspx).

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `ToolbarRenderMode` enum. This enum accepts the following values: `TopToolbar` and `BottomToolbar`.
<!--/fullDescription-->