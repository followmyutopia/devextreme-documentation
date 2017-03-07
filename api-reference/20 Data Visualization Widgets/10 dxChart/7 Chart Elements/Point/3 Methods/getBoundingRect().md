<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
get size rect point
<!--/d-->
<!--rd-->coordinates, width and height point<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Gets the parameters of the point's [minimum bounding rectangle](http://en.wikipedia.org/wiki/Minimum_bounding_rectangle) (MBR).
<!--/shortDescription-->

<!--returnType-->object<!--/returnType-->
<!--returnDescription-->
An object with the following content: <i>{ x: numeric, y: numeric, height: numeric, width: numeric }</i>.
<!--/returnDescription-->

<!--fullDescription-->
The object returned by this method contains the X and Y coordinates of the upper-left corner of the MBR. These coordinates are relative to the client area (widget's container). Additionally, the returned object contains the height and width of the MBR.

[note]This method is not supported for the [rangeBar](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeBarSeries/) and [rangeArea](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeAreaSeries/) series points.
<!--/fullDescription-->