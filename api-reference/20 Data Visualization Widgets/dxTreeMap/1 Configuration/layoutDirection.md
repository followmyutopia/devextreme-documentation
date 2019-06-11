<!--id-->dxTreeMap.Options.layoutDirection<!--/id-->
===========================================================================
<!--default-->'leftTopRightBottom'<!--/default-->
<!--acceptValues-->'leftBottomRightTop' | 'leftTopRightBottom' | 'rightBottomLeftTop' | 'rightTopLeftBottom'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the direction in which the items will be laid out.
<!--/shortDescription-->

<!--fullDescription-->
The value of this option determines the start and end point of the layout. See the image below to spot the difference between the available layout directions.

![DevExpress DevExtreme HTML5 TreeMap LayoutDirection](/Content/images/doc/19_1/ChartJS/TreeMap_layoutDirections.png)

[note]If you use a custom [layout algorithm](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#layoutAlgorithm), this option will be ignored.

#include common-ref-enum with {
    enum: "`TreeMapLayoutDirection`",
    values: "`LeftTopRightBottom`, `LeftBottomRightTop`, `RightTopLeftBottom`, and `RightBottomLeftTop`"
}
<!--/fullDescription-->