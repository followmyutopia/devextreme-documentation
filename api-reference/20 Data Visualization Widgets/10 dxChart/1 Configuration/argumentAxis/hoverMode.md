<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'none'<!--/default-->
<!--acceptValues-->'none' | 'allArgumentPoints'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies chart elements to be highlighted when a user points to an axis label.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts one of the following values.

* **none**    
Axis labels do not respond to pointing to them.
* **allArgumentPoints**    
When a user points to a label on the argument axis, series points of the corresponding argument become highlighted.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `ArgumentAxisHoverMode` enum. This enum accepts the following values: `AllArgumentPoints` and `None`.

#####See Also#####
- **commonSeriesSettings** | **point** | [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/point/hoverStyle/) - specifies the appearance of series points in the hover state. Applies to all series points.
- **series** | **point** | [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/point/hoverStyle/) - the same, but applies to the points of a particular series.
<!--/fullDescription-->