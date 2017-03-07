<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'leftTopRightBottom'<!--/default-->
<!--acceptValues-->'leftTopRightBottom' | 'leftBottomRightTop' | 'rightTopLeftBottom' | 'rightBottomLeftTop'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the direction in which the items will be laid out.
<!--/shortDescription-->

<!--fullDescription-->
The value of this option determines the start and end point of the layout. See the image below to spot the difference between the available layout directions.

![DevExpress DevExtreme HTML5 TreeMap LayoutDirection](/Content/images/doc/16_2/ChartJS/TreeMap_layoutDirections.png)

[note]If you use a custom [layout algorithm](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#layoutAlgorithm), this option will be ignored.

When configuring the widget using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), you can specify this option using the `TreeMapLayoutDirection` enum. This enum accepts the following values: `LeftTopRightBottom`, `LeftBottomRightTop`, `RightTopLeftBottom` and `RightBottomLeftTop`.
<!--/fullDescription-->