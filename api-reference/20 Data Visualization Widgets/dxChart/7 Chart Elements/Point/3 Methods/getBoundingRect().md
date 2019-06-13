<!--id-->chartPointObject.getBoundingRect()<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Gets the parameters of the point's <a href="http://en.wikipedia.org/wiki/Minimum_bounding_rectangle" target="_blank">minimum bounding rectangle</a> (MBR).
<!--/shortDescription-->

<!--returnType-->Object<!--/returnType-->
<!--returnDescription-->
An object with the following content: *{ x: numeric, y: numeric, height: numeric, width: numeric }*.
<!--/returnDescription-->

<!--fullDescription-->
The object returned by this method contains the X and Y coordinates of the upper-left corner of the MBR. These coordinates are relative to the client area (widget's container). Additionally, the returned object contains the height and width of the MBR.

[note]This method is not supported for the [rangeBar](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeBarSeries/) and [rangeArea](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeAreaSeries/) series points.
<!--/fullDescription-->